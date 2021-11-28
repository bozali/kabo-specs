#pragma once

#include <Windows.h>

#include <cstdint>

namespace kabo::monitor {

struct MemoryUsage
{
    float current_usage;
    float total;
};


struct CPU
{
    float speed;
    float base_speed;
    uint32_t utilization;
    uint32_t sockets;
    uint32_t cores;
    uint32_t logical_processors;
};


struct CPUUsage
{
    double utilization;
};


struct GPUUsage
{
    uint32_t temperature;
    uint32_t utilization;
};

}
