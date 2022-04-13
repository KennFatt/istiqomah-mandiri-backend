-- DropForeignKey
ALTER TABLE `AnggotaKeluarga` DROP FOREIGN KEY `AnggotaKeluarga_keluarga_id_fkey`;

-- AddForeignKey
ALTER TABLE `AnggotaKeluarga` ADD CONSTRAINT `AnggotaKeluarga_keluarga_id_fkey` FOREIGN KEY (`keluarga_id`) REFERENCES `Keluarga`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
