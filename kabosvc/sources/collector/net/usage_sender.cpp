#include <collector/net/usage_sender.h>

using namespace kabo::net;


UsageSender::UsageSender()
    : socket_(context_)
{
}


UsageSender::~UsageSender()
{
    if (socket_.is_open()) {
        socket_.close();
    }
}


void UsageSender::Connect(const std::string& address, asio::ip::port_type port)
{
    asio::ip::tcp::endpoint endpoint(asio::ip::address::from_string(address), port);
    socket_.connect(endpoint);
}

