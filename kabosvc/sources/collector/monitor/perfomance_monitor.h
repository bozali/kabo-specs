#pragma once

#include <Windows.h>
#include <Psapi.h>
#include <Pdh.h>
#include <PdhMsg.h>

#include <collector/monitor/components.h>


namespace kabo::monitor {

class PerfomanceMonitor
{
public:
    PerfomanceMonitor() noexcept;
    ~PerfomanceMonitor() noexcept;

    [[nodiscard]] CPUUsage GetCPUUsage() const noexcept;
    [[nodiscard]] MemoryUsage GetMemoryUsage() const noexcept;
    [[nodiscard]] GPUUsage GetGPUUsage() const noexcept;
    
    [[nodiscard]] CPU FetchCPUInfo() const;

private:
    PDH_HCOUNTER counter_;
    PDH_HQUERY query_;
};

}
