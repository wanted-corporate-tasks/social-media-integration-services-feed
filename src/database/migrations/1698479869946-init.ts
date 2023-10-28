import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1698479869946 implements MigrationInterface {
  name = 'Init1698479869946';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`account\` varchar(255) NOT NULL COMMENT '유저의 로그인에 사용되는 계정', \`email\` varchar(255) NOT NULL COMMENT '유저 이메일 - 중복 가능', \`password\` varchar(255) NOT NULL COMMENT '유저의 로그인에 사용되는 비밀번호', \`code\` varchar(255) NOT NULL COMMENT '이메일 인증 코드 - 6자리의 랜덤한 코드', \`is_active\` varchar(255) NOT NULL COMMENT '이메일 인증 코드 인증 여부에 따른 계정 활동 가능 여부', \`latest_password\` varchar(255) NOT NULL COMMENT '비밀번호 재설정 시 최근에 사용한 비밀번호는 사용 할 수 없음', UNIQUE INDEX \`IDX_4ab2df0a57a74fdf904e0e2708\` (\`account\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`post\` (\`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`content_id\` varchar(255) NOT NULL COMMENT '외부 SNS에서 관리하는 고유 인식 값', \`type\` varchar(255) NOT NULL COMMENT '외부 SNS의 유형', \`title\` varchar(255) NOT NULL COMMENT '외부 SNS의 게시글 제목', \`content\` varchar(255) NOT NULL COMMENT '외부 SNS의 게시글 내용', \`view_count\` int NOT NULL COMMENT 'Feed에서 조회 수 기록', \`like_count\` int NOT NULL COMMENT 'Feed에서 좋아요 수 기록', \`share_count\` int NOT NULL COMMENT 'Feed에서 공유 수 기록', \`hashtags\` varchar(255) NOT NULL COMMENT 'Join 사용없이 가져오기 위한 hashtag (hashtag Table과 같이 저장됨)', \`user_id\` bigint UNSIGNED NOT NULL COMMENT '게시물 등록을 한 유저의 고유 값', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`post-hashtag\` (\`hashtag_id\` bigint UNSIGNED NOT NULL, \`post_id\` bigint UNSIGNED NOT NULL, PRIMARY KEY (\`hashtag_id\`, \`post_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`hashtag\` (\`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`post\` ADD CONSTRAINT \`FK_52378a74ae3724bcab44036645b\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`post-hashtag\` ADD CONSTRAINT \`FK_b6dd3536a3ede304ffc6dd390c4\` FOREIGN KEY (\`hashtag_id\`) REFERENCES \`hashtag\`(\`id\`) ON DELETE NO ACTION ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`post-hashtag\` ADD CONSTRAINT \`FK_9154d7008737ccf5c09c6462375\` FOREIGN KEY (\`post_id\`) REFERENCES \`post\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`post-hashtag\` DROP FOREIGN KEY \`FK_9154d7008737ccf5c09c6462375\``);
    await queryRunner.query(`ALTER TABLE \`post-hashtag\` DROP FOREIGN KEY \`FK_b6dd3536a3ede304ffc6dd390c4\``);
    await queryRunner.query(`ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_52378a74ae3724bcab44036645b\``);
    await queryRunner.query(`DROP TABLE \`hashtag\``);
    await queryRunner.query(`DROP TABLE \`post-hashtag\``);
    await queryRunner.query(`DROP TABLE \`post\``);
    await queryRunner.query(`DROP INDEX \`IDX_4ab2df0a57a74fdf904e0e2708\` ON \`user\``);
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
