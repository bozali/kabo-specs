#pragma once

#include <collector/json/json.h>

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
    inline CPUUsage() : utilization(0) {
    }

    double utilization;
};

struct GPUUsage
{
    inline GPUUsage() : temperature(0), utilization(0) {
    }

    uint32_t temperature;
    uint32_t utilization;
};


struct UsageData
{
    CPUUsage cpu;
    GPUUsage gpu;
};



void to_json(nlohmann::json& j, const kabo::monitor::UsageData& data);


}

