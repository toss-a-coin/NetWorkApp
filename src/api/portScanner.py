from socket import * 

def scanningPorts():
    ports = []
    targetIP = gethostbyname('127.0.0.1')
    for i in range(5000, 5020):
        s = socket(AF_INET, SOCK_STREAM)
        result = s.connect_ex((targetIP, i))
        if(result == 0) :
            ports.append(i)
        s.close()
    return ports