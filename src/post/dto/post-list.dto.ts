// postList.dto.ts

import { IsString, IsOptional, IsEnum, IsInt } from 'class-validator';

export enum OrderBy {
  CREATED_AT = 'created_at',
  UPDATED_AT = 'updated_at',
  LIKE_COUNT = 'like_count',
  SHARE_COUNT = 'share_count',
  VIEW_COUNT = 'view_count',
}

export enum SearchBy {
  TITLE = 'title',
  CONTENT = 'content',
  TITLE_CONTENT = 'title,content',
}

export class PostListDto {
  @IsString()
  hashtagId: number;

  @IsOptional()
  @IsString()
  type: string;

  @IsOptional()
  @IsEnum(OrderBy)
  orderBy: OrderBy = OrderBy.CREATED_AT;

  @IsOptional()
  @IsEnum(SearchBy)
  searchBy: SearchBy = SearchBy.TITLE_CONTENT;

  @IsOptional()
  @IsString()
  search: string;

  @IsOptional()
  @IsInt()
  pageCount: number = 10;

  @IsOptional()
  @IsInt()
  page: number = 0;
}
