#include <Windows.h>
#include <Psapi.h>
#include <Pdh.h>
#include <PdhMsg.h>

#include <iostream>
#include <chrono>
#include <thread>
#include <iomanip>

#include <collector/monitor/perfomance_monitor.h>
#include <collector/monitor/components.h>
#include <collector/json/json.h>


#pragma comment(lib, "Pdh.lib")

#include <nvml.h>

namespace nl = nlohmann;

struct UsageData
{
    kabo::monitor::CPUUsage cpu;
    kabo::monitor::GPUUsage gpu;
};


void to_json(nl::json& j, const UsageData& data) {
    j["cpu"] = {{ "utilization", data.cpu.utilization }};
    j["gpu"] = {
        { "temperature", data.gpu.temperature },
        { "utilization", data.gpu.utilization }
    };
}


int main()
{
    using namespace std::chrono_literals;
    using namespace kabo::monitor;


    UsageData data;
    data.cpu.utilization = 40.0;
    data.gpu.temperature = 55;
    data.gpu.utilization = 15;

    nl::json j = data;
    std::cout << j << std::endl;

    /*
    PerfomanceMonitor perfomance_monitor;

    nvmlInit();

    nvmlDevice_t device;
    nvmlUtilization_t utilization;

    nvmlDeviceGetHandleByIndex(0, &device);

    while (true)
    {
        std::cout << std::fixed;

        // Fetch GPU
        GPUUsage gpu;

        nvmlDeviceGetTemperature(device, NVML_TEMPERATURE_GPU, &gpu.temperature);
        nvmlDeviceGetUtilizationRates(device, &utilization);

        gpu.utilization = utilization.gpu;

        std::cout << "GPU Temperature: " << gpu.temperature << " C\370" << std::endl;
        std::cout << "GPU Utilization: " << gpu.utilization << " %" << std::endl;

        // Fetch CPU
        CPUUsage cpu = perfomance_monitor.GetCPUUsage();

        std::cout << "CPU Utilization: " << std::setprecision(0) << std::round(cpu.utilization) << " %" << std::endl;

        std::this_thread::sleep_for(1s);
        system("cls");
    }
    */

    /*
    nvmlInit();

    nvmlDevice_t device;
    nvmlUtilization_t utilization;

    nvmlDeviceGetHandleByIndex(0, &device);

    char buffer[256];
    nvmlDeviceGetName(device, buffer, ARRAYSIZE(buffer));

    std::cout << buffer << std::endl;
    
    while (true)
    {
        uint32_t temperature;
        // nvmlDeviceGetTemperature(device, NVML_TEMPERATURE_GPU, &temperature);
        nvmlDeviceGetUtilizationRates(device, &utilization);

        std::cout << utilization.gpu << std::endl;
        // std::cout << temperature << std::endl;

        std::this_thread::sleep_for(1.5s);
    }

    nvmlShutdown();
    */

    /*
    std::cout << std::fixed;

    static PDH_HCOUNTER cpu_total = nullptr;
    static PDH_HQUERY cpu_query = nullptr;

    PDH_STATUS status = ERROR_SUCCESS;
    PdhOpenQuery(nullptr, 0, &cpu_query);
    PdhAddEnglishCounter(cpu_query, TEXT("\\Processor Information(_Total)\\% Processor Utility"), 0, &cpu_total);
    PdhCollectQueryData(cpu_query);

    while (true)
    {
        std::this_thread::sleep_for(1s);

        PDH_FMT_COUNTERVALUE counter_value;

        PdhCollectQueryData(cpu_query);
        PdhGetFormattedCounterValue(cpu_total, PDH_FMT_DOUBLE, nullptr, &counter_value);

        std::cout << std::setprecision(0) << std::round(counter_value.doubleValue) << std::endl;
    }

    PdhRemoveCounter(cpu_total);
    PdhCloseQuery(cpu_query);
    */

    return 0;
}