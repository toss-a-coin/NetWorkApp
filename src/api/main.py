import paramiko
import time
from portScanner import scanningPorts

router_ip = '1.1.1.1'
router_username = 'admin'
router_password = 'pass'

ssh = paramiko.SSHClient()
ssh.load_system_host_keys()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
try:
    ssh.connect(router_ip, 
    username=router_username, 
    password=router_password,
    look_for_keys=True )
    remote_conn = ssh.invoke_shell()
except Exception as e:
    print("Error en connection")
    print(e)
    pass
print(ssh)


