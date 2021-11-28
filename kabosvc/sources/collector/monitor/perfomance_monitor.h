#pragma once

#include <Pdh.h>

#include <collector/monitor/components.h>


namespace kabo::monitor {

class PerfomanceMonitor
{
public:
    PerfomanceMonitor() noexcept;
    ~PerfomanceMonitor() noexcept;

    [[nodiscard]] CPUUsage GetCPUUsage() const noexcept;

    MemoryUsage FetchMemoryUsage() const noexcept;

    // CpuUsage FetchCpuUsage() const;

    CPU FetchCPUInfo() const;


private:
    PDH_HCOUNTER counter_;
    PDH_HQUERY query_;
};

}
