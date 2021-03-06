1. 
1. book_info 图书表

| 名           | 类型    | 长度 | 小数点 | 非空 | 键   | 注释         |
| ------------ | ------- | ---- | ------ | ---- | ---- | ------------ |
| book_id      | varchar | 255  | 0      | 是   | ✔    | 图书号       |
| book_name    | varchar | 255  | 0      | 是   |      | 图书名       |
| author       | varchar | 255  | 0      | 是   |      | 作者         |
| introduction | text    | 0    | 0      | 否   |      | 简介         |
| book_cover   | varchar | 255  | 0      | 是   |      | 图书封面     |
| publisher    | varchar | 255  | 0      | 是   |      | 出版社       |
| size         | decimal | 10   | 2      | 是   |      | 文件大小     |
| pubdate      | date    | 0    | 0      | 是   |      | 出版时间     |
| class_id     | int     | 0    | 0      | 是   |      | 分类号       |
| favorite     | int     | 0    | 0      | 否   |      | 收藏数       |
| download_url | varchar | 255  | 0      | 否   |      | 图书下载链接 |
| download     | int     | 0    | 0      | 否   |      | 下载数       |

2. admin   管理员表

| 名                | 类型    | 长度 | 小数点 | 非空 | 键   | 注释   |
| ----------------- | ------- | ---- | ------ | ---- | ---- | ------ |
| admin_id          | bigint  | 0    | 0      | 是   | ✔    | 账号   |
| password          | varchar | 255  | 0      | 是   |      | 密码   |
| usernamepublisher | varchar | 255  | 0      | 否   |      | 用户名 |

3. class_info 图书分类表

   | 名         | 类型    | 长度 | 小数点 | 非空 | 键   | 注释   |
   | ---------- | ------- | ---- | ------ | ---- | ---- | ------ |
   | class_id   | int     | 0    | 0      | 是   | ✔    | 类别号 |
   | class_name | varchar | 255  | 0      | 是   |      | 类别名 |

4.  user 用户信息表

| 名           | 类型    | 长度 | 小数点 | 非空 | 键   | 注释     |
| ------------ | ------- | ---- | ------ | ---- | ---- | -------- |
| user_id      | varchar | 255  | 0      | 是   | ✔    | 用户ID   |
| user_pwd     | varchar | 255  | 0      | 是   |      | 用户密码 |
| user_picture | varchar | 255  | 0      | 是   |      | 用户头像 |
| phone        | int     | 11   | 0      | 是   |      | 电话     |
| name         | varchar | 255  | 0      | 是   |      | 姓名     |
| sex          | varchar | 255  | 0      | 是   |      | 性别     |
| birth        | date    | 0    | 0      | 是   |      | 生日     |
| mail         | char    | 30   | 0      | 否   |      | 邮箱     |
| favorite     | varchar | 255  | 0      | 否   |      | 收藏     |

5. comment 评论表

   | 名              | 类型    | 长度 | 小数点 | 非空 | 键   | 注释     |
   | --------------- | ------- | ---- | ------ | ---- | ---- | -------- |
   | comment_id      | varchar | 255  | 0      | 是   | ✔    | 评论if   |
   | book_id         | varchar | 255  | 0      | 是   |      | 图书id   |
   | user_id         | varchar | 255  | 0      | 是   |      | 用户id   |
   | comment_content | text    | 0    | 0      | 是   |      | 评论内容 |
   | comment_data    | data    | 0    | 0      | 是   |      | 评论日期 |

   

6. user_favorite  用户收藏表

| 名                | 类型     | 长度 | 小数点 | 非空 | 键   | 注释       |
| ----------------- | -------- | ---- | ------ | ---- | ---- | ---------- |
| user_id           | varchar  | 255  | 0      | 是   | ✔    | 用户id     |
| book_id           | varchar  | 255  | 0      | 是   | ✔    | 图书id     |
| book_name         | varchar  | 255  | 0      | 是   |      | 收藏图书名 |
| create_data       | datatime | 0    | 0      | 是   |      | 收藏日期   |
| favorite_book_url | varchar  | 255  |        | 否   |      | 图书地址   |

7. browsnig_record  浏览记录表

| 名              | 类型     | 长度 | 小数点 | 非空 | 键   | 注释     |
| --------------- | -------- | ---- | ------ | ---- | ---- | -------- |
| re_id           | int      |      | 0      | 是   | ✔    | 主键     |
| book_id         | varchar  | 255  | 0      | 是   |      | 图书id   |
| user_id         | varchar  | 255  | 0      | 是   |      | 用户id   |
| browse_data     | datatime | 0    | 0      | 是   |      | 浏览日期 |
| browse_book_url | varchar  | 255  |        | 否   |      | 图书地址 |