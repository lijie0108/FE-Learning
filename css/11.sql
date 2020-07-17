create table ImageType(
  id int primary key NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  name varchar(255) not null default '' comment '类型名称',
  edit_by varchar(128) NOT NULL DEFAULT '' COMMENT '编辑人',
  edit_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '编辑时间',
  inner_id varchar(128) NOT NULL DEFAULT '' COMMENT '内部标识'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='枚举类型';

create table ImageModule(
  id int primary key NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  description varchar(255) not null default '' comment '模块描述',
  edit_by varchar(128) NOT NULL DEFAULT '' COMMENT '编辑人',
  edit_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '编辑时间',
  inner_id varchar(128) NOT NULL DEFAULT '' COMMENT '内部标识'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='模块枚举';

create table SkipPageType(
  id int primary key NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  description varchar(255) not null default '' comment '页面描述',
  edit_by varchar(128) NOT NULL DEFAULT '' COMMENT '编辑人',
  edit_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '编辑时间',
  inner_id varchar(128) NOT NULL DEFAULT '' COMMENT '内部标识'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='跳转枚举';

create table ImageShowDetail(
  id int primary key NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  name varchar(64) not null default '' comment '类型名字，用于程序使用',
  picModuleId int not null comment '模块枚举ID',
  skipTypeId int not null comment '跳转枚举ID',
  picTitle varchar(128) not null default '' comment '图片描述',
  picUrl varchar(512) not null comment '图片地址',
  flagId int comment '标识 FlagEnum表ID',
  linkUrl varchar(512) comment '图片跳转地址',
  position int comment '位置',
  advertisingType int comment '0内部广告 1外部广告',
  startTime datetime NOT NULL COMMENT '生效开始时间',
  enTime datetime NOT NULL COMMENT '生效结束时间',
  admin varchar(64) comment '最后操作人名字',
  createTime datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  updateTime timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  UNIQUE KEY uk_name (name)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='图片详情';