import { ApiDevice, Controller } from '@scp/types';
import { getSpofityData, isError } from '@scp/utils';

const DevicesController: Controller = async (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'No user' });

  if (req.session.devices) {
    return res.json(req.session.devices);
  }

  const devices = await getSpofityData<{ devices: ApiDevice[] }>('/me/player/devices', req);

  if (!devices) return res.json({ error: 'Something went wrong' });
  if (isError(devices)) return res.json({ error: devices.error });

  return res.json(
    devices.devices
      .filter(device => !device.is_restriced)
      .map(device => ({
        name: device.name,
        id: device.id,
        volume: device.volume_percentage,
        type: device.type,
        isActive: device.is_active,
      })),
  );
};

export default DevicesController;
