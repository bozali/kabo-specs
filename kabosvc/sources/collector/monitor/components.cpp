#include <collector/monitor/components.h>


void kabo::monitor::to_json(nlohmann::json& j, const kabo::monitor::UsageData& data)
{
    j["cpu"] = {{ "utilization", data.cpu.utilization }};
    j["gpu"] = {
        { "temperature", data.gpu.temperature },
        { "utilization", data.gpu.utilization }
    };
}