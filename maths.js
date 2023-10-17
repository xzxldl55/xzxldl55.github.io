const name = [
    "万盼盼",
    "谭紫怡",
    "李宇航",
    "熊星",
    "高艺馨",
    "黄志豪",
    "何灿",
    "罗善佳",
    "涂勇健",
    "罗梓亮",
    "邓钟浩",
    "肖梓梁",
    "郭香",
    "黄妮",
    "喻君如",
    "匡珍妮",
    "徐凯兴",
    "刘文志",
    "王梓俊",
    "周鑫宇",
    "刘畅",
    "李兆沙",
    "吴康华",
    "黄文欢",
    "黄淞",
    "胡建文",
    "涂阳",
    "胡振东",
    "谌嘉琪",
    "吴广安",
    "辜欣雨",
    "邱子健",
    "姚思雅",
    "熊文超",
    "田金兰",
    "谢象旋",
    "万蔷雨",
    "陈千甬",
    "聂罗淅",
    "李建龙",
    "刘俊杰",
    "李雪如",
    "李文斌",
    "周芮",
    "李星宇",
    "涂琬婷",
    "涂天宇",
    "杨夏颖",
    "徐小凤",
    "付雯慧",
    "陶熠轩",
    "郭聪",
    "杨智群",
    "刘雅琦",
    "王紫梦",
    "杨芷萱",
    "高行",
    "周盼",
    "吴健雄",
    "陶鸿博",
    "王嘉欣",
    "李桂林",
    "刘崇宇"
]

const isUpdate = [
    false,
    true,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false
]

export default name.map((n, i) => ({
    name: n,
    complect: isUpdate[i]
}))