import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Keluarga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  no_induk: string;

  @Column({
    unique: true,
    length: 16,
  })
  no_kk: string;

  @Column({
    unique: true,
    length: 16,
  })
  no_nik: string;

  @Column({
    default: null,
  })
  address?: string;

  @Column({
    default: false,
  })
  is_registered: boolean;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;

  /**
   * TODO: add relation
   */
  @Column({
    unique: true,
  })
  kepala_keluarga_id: number;
}
