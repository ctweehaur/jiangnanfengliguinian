/**
 * 互动古文教学平台 - 《江南逢李龟年》原文核心词解数据包
 */

const poemData = [
    // 第一句：岐王宅里寻常见，
    { text: "岐王", py: "qí wáng", zh: "岐王：唐玄宗的弟弟李隆范，封号为岐王。当时他的府邸是文人墨客经常聚会的地方。", en: "Prince Qi: Emperor Xuanzong's younger brother.", exam: true },
    { text: "宅里", py: "zhái lǐ", zh: "宅里：岐王在长安的府邸内。", en: "inside the mansion" },
    { text: "寻常", py: "xún cháng", zh: "寻常：平常、经常、屡见不鲜。形容过去两人的频繁交往。", en: "commonly / ordinary", exam: true },
    { text: "见", py: "jiàn", zh: "见：看见、相见。指经常在宴席上相遇。", en: "met / saw" },
    { text: "，", punc: true },

    // 第二句：崔九堂前几度闻。
    { text: "崔九", py: "cuī jiǔ", zh: "崔九：指崔涤，在家族同辈中排行第九。他是唐玄宗宠信的近侍，其府邸也是音乐名流聚集的场所。", en: "Cui Jiu: Cui Di, a close official to the Emperor.", exam: true },
    { text: "堂前", py: "táng qián", zh: "堂前：崔涤府邸的大堂前。", en: "in front of the hall" },
    { text: "几度", py: "jǐ dù", zh: "几度：好几次、多次。形容听到李龟年歌声的次数之多。", en: "many times / repeatedly", exam: true },
    { text: "闻", py: "wén", zh: "闻：听见。这里特指聆听李龟年的绝妙歌声。", en: "heard" },
    { text: "。", punc: true },

    // 第三句：正是江南好风景，
    { text: "正是", py: "zhèng shì", zh: "正是：恰好是，正值。带有无限感慨的语气。", en: "precisely is" },
    { text: "江南", py: "jiāng nán", zh: "江南：长江中下游以南地区，这里特指战乱时李龟年流落的长沙一带。", en: "Jiangnan (south of the Yangtze River)" },
    { text: "好", py: "hǎo", zh: "好：优美、美丽。用江南大好的暮春风光反衬两人流落异乡的凄凉。", en: "beautiful" },
    { text: "风景", py: "fēng jǐng", zh: "风景：风光、景色。这里特指暮春时节的艳丽景色。", en: "scenery" },
    { text: "，", punc: true },

    // 第四句：落花时节又逢君。
    { text: "落花", py: "luò huā", zh: "落花：暮春凋零的残花。不仅描绘自然之景，更隐喻唐王朝由盛转衰、个人身世飘零的凄凉景象。", en: "falling blossoms", exam: true },
    { text: "时节", py: "shí jié", zh: "时节：季节、时候。", en: "season" },
    { text: "又", py: "yòu", zh: "又：再次、竟然。透露出异乡偶遇的惊异与人事全非的无限悲凉。", en: "again" },
    { text: "逢", py: "féng", zh: "逢：遇见、相逢。", en: "meet / encounter" },
    { text: "君", py: "jūn", zh: "君：您。这里特指唐代著名的宫廷乐师李龟年。", en: "you (referring to Li Guinian)", exam: true },
    { text: "。", punc: true }
];

console.log("成功加载：jiangnan_text 原文数据包");
