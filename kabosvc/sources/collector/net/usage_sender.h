#pragma once

#include <asio.hpp>

#include <collector/json/json.h>

#include <cstdint>
#include <array>
#include <string>


namespace kabo::net {

class UsageSender
{
public:
    UsageSender();
    ~UsageSender();

    void Connect(const std::string& address, asio::ip::port_type port);

    template <typename T>
    void SendJson(const T& data) {
        nlohmann::json j = data;
        auto message = nlohmann::to_string(j);
        
        std::vector<char> buffer;
        buffer.reserve(message.size() + 1);

        std::copy(message.begin(), message.end(), std::back_inserter(buffer));

        asio::error_code error;
        socket_.write_some(asio::buffer(buffer, message.size()), error);
    }

private:
    asio::io_context context_;
    asio::ip::tcp::socket socket_;
};

}

