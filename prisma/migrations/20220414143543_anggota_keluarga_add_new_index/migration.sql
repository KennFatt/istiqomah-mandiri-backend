-- DropIndex
DROP INDEX `AnggotaKeluarga_name_idx` ON `AnggotaKeluarga`;

-- CreateIndex
CREATE INDEX `AnggotaKeluarga_name_keluarga_id_idx` ON `AnggotaKeluarga`(`name`, `keluarga_id`);
