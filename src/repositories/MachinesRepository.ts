import { EntityRepository, Repository } from 'typeorm';

import Machine from '../models/Machine';

@EntityRepository(Machine)
class MachinesRepository extends Repository<Machine> {
  public async findById(id: string): Promise<Machine | null> {
    const alreadyExists = await this.findOne({
      where: {
        id,
      },
    });

    return alreadyExists || null;
  }
}

export default MachinesRepository;
