interface ITab {
  name: string;
}

/**
 * 1 ：297 / 210 书籍封面
 * 2 ：77 / 137横向封面
 * 3 ：128 / 280 幻灯片
 * 4 ：78 / 280 广告横幅
 * 5 ：1
 *
 */
type BookCoverRatio = 1 | 2 | 3 | 4 | 5
