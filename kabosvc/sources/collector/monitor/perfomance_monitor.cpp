#include <collector/monitor/perfomance_monitor.h>

using namespace kabo::monitor;


PerfomanceMonitor::PerfomanceMonitor() noexcept
{
    PdhOpenQuery(nullptr, 0, &query_);
    PdhAddEnglishCounter(query_, TEXT("\\Processor Information(_Total)\\% Processor Utility"), 0, &counter_);
    PdhCollectQueryData(query_);
}


PerfomanceMonitor::~PerfomanceMonitor() noexcept
{
    PdhRemoveCounter(counter_);
    PdhCloseQuery(query_);
}


CPUUsage PerfomanceMonitor::GetCPUUsage() const noexcept
{
    PDH_FMT_COUNTERVALUE counter_value;
    SecureZeroMemory(&counter_value, sizeof(PDH_FMT_COUNTERVALUE));

    PdhCollectQueryData(query_);
    PdhGetFormattedCounterValue(counter_, PDH_FMT_DOUBLE, nullptr, &counter_value);

    CPUUsage cpu;
    cpu.utilization = counter_value.doubleValue;

    return cpu;
}


MemoryUsage PerfomanceMonitor::FetchMemoryUsage() const noexcept
{
    MEMORYSTATUSEX memory_status;
    SecureZeroMemory(&memory_status, sizeof(MEMORYSTATUSEX));

    memory_status.dwLength = sizeof(MEMORYSTATUSEX);

    GlobalMemoryStatusEx(&memory_status);

    MemoryUsage memory;
    memory.total = static_cast<float>(memory_status.ullTotalPhys) / 1024.0f / 1024.f / 1024.0f;
    memory.current_usage = static_cast<float>(memory_status.ullTotalPhys - memory_status.ullAvailPhys) / 1024.0f / 1024.f / 1024.0f;

    return memory;
}


CPU PerfomanceMonitor::FetchCPUInfo() const
{
    DWORD length = sizeof(SYSTEM_LOGICAL_PROCESSOR_INFORMATION_EX);

    SYSTEM_LOGICAL_PROCESSOR_INFORMATION_EX cpu_info;
    SecureZeroMemory(&cpu_info, length);

    GetLogicalProcessorInformationEx(_LOGICAL_PROCESSOR_RELATIONSHIP::RelationGroup, &cpu_info, &length);


    return CPU();
}

