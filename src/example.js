const devices = [
    {
        id: 1,
        type: 'router',
        hostname: 'R1',
        interfaces: [
            {interface: 'ethernet 0/0', ip: '192.168.1.1'},
            {interface: 'ethernet 0/1', ip: '192.168.1.2'},
        ],
        ssh: true
    },
    {
        id: 2,
        type: 'router',
        hostname: 'R2',
        interfaces: [
            {interface: 'ethernet 0/0', ip: '192.168.1.1'},
            {interface: 'ethernet 0/1', ip: '192.168.1.2'},
        ],
        ssh: true
    },
    {
        id: 3,
        type: 'router',
        hostname: 'R3',
        interfaces: [
            {interface: 'ethernet 0/0', ip: '192.168.1.1'},
            {interface: 'ethernet 0/1', ip: '192.168.1.2'},
        ],
        ssh: true
    },
    {
        id: 4,
        type: 'router',
        hostname: 'R4',
        interfaces: [
            {interface: 'ethernet 0/0', ip: '192.168.1.1'},
            {interface: 'ethernet 0/1', ip: '192.168.1.2'},
        ],
        ssh: true
    },
    {
        id: 5,
        type: 'router',
        hostname: 'R5',
        interfaces: [
            {interface: 'ethernet 0/0', ip: '192.168.1.1'},
            {interface: 'ethernet 0/1', ip: '192.168.1.2'},
        ],
        ssh: true
    },
    {
        id: 6,
        type: 'router',
        hostname: 'R6',
        interfaces: [
            {interface: 'ethernet 0/0', ip: '192.168.1.1'},
            {interface: 'ethernet 0/1', ip: '192.168.1.2'},
        ],
        ssh: false
    },
    {
        id: 7,
        type: 'router',
        hostname: 'R7',
        interfaces: [
            {int: 'ethernet 0/0', ip: '192.168.1.1'},
            {int: 'ethernet 0/1', ip: '192.168.1.2'},
        ],
        ssh: false
    },
    {
        id: 8,
        type: 'router',
        hostname: 'R8',
        interfaces: [
            {interface: 'ethernet 0/0', ip: '192.168.1.1'},
            {interface: 'ethernet 0/1', ip: '192.168.1.2'},
        ],
        ssh: true
    },
    {
        id: 9,
        type: 'router',
        hostname: 'R9',
        interfaces: [
            {interface: 'ethernet 0/0', ip: '192.168.1.1'},
            {interface: 'ethernet 0/1', ip: '192.168.1.2'},
        ],
        ssh: false
    },
    
];

export default devices;