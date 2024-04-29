import net from 'net'

export async function findPort(port, portRetryCount = 10): Promise<number> {
  return new Promise((resolve, reject) => {
    if (port === undefined) {
      port = 0
    } else {
      port = parseInt(port)
      if (!(port >= 0)) port = 0
    }
    const server = net.createServer();
    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        port++
        portRetryCount--
        if (portRetryCount > 0) {
          server.listen(port)
          return
        }
      }
      reject(err)
    })
    server.on('listening', async () => {
      const addr = server.address() as net.AddressInfo
      const result = addr.port;
      server.close()
      resolve(result);
    })
    server.listen(port);
  })
}
