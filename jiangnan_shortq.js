/**
 * 互动古文教学平台 - 《江南逢李龟年》简答题特训专属题库 (5题全引导精准对齐版)
 * 核心设计：采用原生字符数组格式，完美避开标点对齐错位，支持阶梯式思维训练
 */

const shortQData = [
    {
        id: "T1",
        qZh: "请结合 1 和 2 两句，分析“岐王宅里”和“崔九堂前”对表达全诗情感起到了什么作用？",
        qPy: "qǐng jié hé yī hé èr liǎng jù fān xī qí wáng zhái lǐ hé cuī jiǔ táng qián duì biǎo dá quán shī qíng gǎn qǐ dào le shén me zuò yòng",
        qEn: "Based on lines 1 and 2, analyze the role that 'Prince Qi's mansion' and 'Cui Jiu's hall' play in expressing the emotions of the poem.",
        sZh: [
            "1. 第一步：先想一想，岐王府和崔九堂在当年开元盛世是什么样的地方？",
            "2. 第二步：诗人和音乐家当年频繁出入这些豪门，暗示了他们过去的社会地位如何？",
            "3. 第三步：回忆过去的这种“顶级繁华”，是为了和后文眼前的什么现状做对比？"
        ],
        sPy: [
            "yī dì yī bù xiān xiǎng yī xiǎng qí wáng fǔ hé cuī jiǔ táng zài dāng nián kāi yuán shèng shì shì shén me yàng de chǎng suǒ",
            "èr dì èr bù shī rén hé yīn yuè jiā dāng nián pín fán chū rù zhè xiē háo mén àn shì le tā men guò qù de shè huì dì wèi rú hé",
            "sān dì sān bù huí yì guò qù de zhè zhǒng dǐng jí fán huá shì wèi le hé hòu wén yǎn qián de shén me xiàn zhuàng zuò duì bǐ"
        ],
        sEn: "Step 1: Think about what kind of places Prince Qi's mansion and Cui Jiu's hall were during the golden age.<br>Step 2: What does their frequent presence in these palaces imply about their past social status?<br>Step 3: Why recall this 'peak luxury'? What present reality in the later text does it contrast with?",
        aZh: "前两句中的“岐王宅里”和“崔九堂前”是唐代开元盛世顶级权贵与文人聚会的核心场所。杜甫通过回忆过去在这些豪门频繁听到李龟年歌唱的盛况，极力渲染当年的安定与繁荣。这与如今两人流落江南的凄凉现状形成了强烈的昔盛今衰对比，深刻抒发了时代沧桑、盛衰无常的无限悲慨。",
        aPy: "qián liǎng jù zhōng de qí wáng zhái lǐ hé cuī jiǔ táng qián death shì táng dài kāi yuán shèng shì dǐng jí quán guì yǔ wén rén jù huì de hé xīn chǎng suǒ dù fǔ tōng guò huí yì guò qù zài zhè xiē háo mén pín fán tīng dào lǐ guī nián gē唱 de shèng kuàng jí lì xuàn rǎn dāng nián de ān dìng yǔ fán róng zhè yǔ rú jīn liǎng wèi liú luò jiāng nán de qī liáng xiàn zhuàng xíng chéng le qiáng liè de xī shèng jīn cuī duì bǐ shēn kè shū fā le shí dài cāng sāng shèng cuī wú cháng de wú xiàn bēi kǎi",
        aEn: "The two venues represent the pinnacles of cultural luxury during the golden era. By recalling the past grandeur where they frequently met, Du Fu highlights the bygone stability and prosperity. This creates an intense contrast with their current displaced misery in Jiangnan, profoundly expressing an era's tragic decline."
    },
    {
        id: "T2",
        qZh: "品味第三句“正是江南好风景”，谈谈“好风景”三个字在抒情上的精妙之处。",
        qPy: "pǐn wèi dì sān jù zhèng shì jiāng nán hǎo fēng jǐng tán tán hǎo fēng jǐng sān gè zì zài shū qíng shàng de jīng miào zhī chù",
        qEn: "Appreciate 'beautiful scenery' in line 3 and discuss its mastery in evoking emotion.",
        sZh: [
            "1. 第一步：江南暮春的“好风景”带给人一种怎样的视觉感受？是快乐还是悲伤？",
            "2. 第二步：古典诗词中，用美丽的景色来衬托悲伤的心情，这种手法叫什么？",
            "3. 第三步：想一想，眼前的风景越美丽，是不是越能显得两人的流落处境很悲凉？"
        ],
        sPy: [
            "yī dì yī bù jiāng nán mù chūn de hǎo fēng jǐng dài gěi rén yī zhǒng zěn yàng de shì jué gǎn shòu shì kuài lè hái shì bēi shāng",
            "èr dì èr bù gǔ diǎn shī cí zhōng yòng měi lì de jǐng sè lái chèn tuō bēi shāng de xīn qíng zhè zhǒng shǒu fǎ jiào shén me",
            "sān dì sān bù xiǎng yī xiǎng yǎn qián de fēng jǐng yué měi lì shì bú shì yué néng xiǎn de liǎng rén de liú luò chǔ jìng hěn bēi liáng"
        ],
        sEn: "Step 1: What kind of visual feeling does the 'beautiful scenery' of late spring in Jiangnan bring? Is it joy or sorrow?<br>Step 2: In classical poetry, what is the technique called when beautiful scenery is used to contrast sad feelings?<br>Step 3: Consider this: the more beautiful the landscape is, does it make their drifting situation look even more miserable?",
        aZh: "“好风景”采用了“以乐景衬哀情”的反衬手法。江南暮春风景越是繁华秀丽，越反衬出两位开元见证者饱经战乱、穷困潦倒的现实处境之凄凉。大自然的美好与人世间的凋零形成巨大反差，使诗歌中蕴含的个人身世之悲与国破家亡之痛更加深沉动人。",
        aPy: "hǎo fēng jǐng cǎi yòng le yǐ lè jǐng chèn āi qíng de fǎn chèn shǒu fǎ jiāng nán mù chūn fēng jǐng yué shì fán huá xiù měi yué fǎn chèn chū liǎng wèi kāi yuán jiàn zhèng zhě bǎo jīng zhàn luàn qióng kùn liáo dǎo de xiàn shí chǔ jìng zhī qī liáng dà zì rán de měi hǎo yǔ rén shì jiān de diāo líng xíng chéng jù dà fǎn chā shǐ shī gē zhōng yùn hán de gè rén shēn shì zhī bēi yǔ guó pò jiā wáng zhī tòng gèng jiā shēn chén dòng rén",
        aEn: "The 'beautiful scenery' utilizes joyful scenes to heighten grief. The more splendid the spring landscape of Jiangnan, the more agonizing it makes their impoverished, refugee reality. The permanence of nature's beauty contrasts sharply with human fragility, rendering the structural melancholy far more heartbreaking."
    },
    {
        id: "T3",
        qZh: "如何理解尾句“落花时节又逢君”中“落花时节”的双重隐喻含义？",
        qPy: "rú hé lǐ jiě wěi jù luò huā shí jié yòu féng jūn zhōng luò huā shí jié de shuāng chóng yǐn yù hán yì",
        qEn: "How should we understand the dual metaphorical meaning of 'falling blossoms season' in the final line?",
        sZh: [
            "1. 第一步：从字面上看，“落花时节”交代了重逢时的什么自然季节与景色？",
            "2. 第二步：从李龟年和杜甫的个人身世来看，花朵的“凋零”暗示了他们人生的什么阶段？",
            "3. 第三步：从宏大背景来看，安史之乱后的唐朝，像不像是一个正在“走向凋零”的落花帝国？"
        ],
        sPy: [
            "yī dì yī bù cóng zì miàn shàng kàn luò huā shí jié jiāo dài le chóng féng shí de shén me zì rán jì jié yǔ jǐng sè",
            "èr dì èr bù cóng lǐ guī nián hé dù fǔ de gè rén shēn shì lái kàn huā duǒ de diāo líng àn shì le tā men rén shēng de shén me jiē duàn",
            "sān dì sān bù cóng hóng dà bèi jǐng lái kàn ān shǐ zhī luàn hòu de táng cháo xiàng bú xiàng yí gè zhèng zài zǒu xiàng diāo líng de luò huā dì guó"
        ],
        sEn: "Step 1: Literally, what natural season and scenery does 'falling blossoms season' describe?<br>Step 2: Regarding their personal lives, what stage of life does the 'withering' of flowers imply?<br>Step 3: From a macro perspective, does the Tang Dynasty after the rebellion resemble an empire 'withering away' like falling petals?",
        aZh: "“落花时节”具有双重含义：字面意指暮春时百花凋零的自然物候；深层则是一语双关的政治与身世隐喻，既象征着唐王朝经历安史之乱后由盛转衰、不可挽回的颓势，也隐喻了诗人和音乐家步入晚年、飘零无依、穷途末路的悲凉命运。",
        aPy: "luò huā shí jié jù yǒu shuāng chóng hán yì zì miàn yì zhǐ mù chūn shí bǎi huā diāo líng de zì rán wù hòu shēn céng zé shì yī yǔ shuāng guān de zhèng zhì yǔ shēn shì yǐn yù jì xiàng zhēng zhe táng wáng cháo jīng lì ān shǐ zhī luàn hòu yóu shèng zhuǎn cuī bù kě wǎn huí de tuí shì yě yǐn yù le shī rén hé yīn yuè jiā bù rù wǎn nián piāo líng wú yī qióng tú mò lù de bēi liáng mìng yùn",
        aEn: "It carries a dual weight: literally, it marks the fading days of late spring. Metaphorically, it serves as a profound pun, symbolizing both the collapse of the Tang Dynasty's golden age into chaotic ruin and the withered, drifting fates of the two old men in their twilight years."
    },
    {
        id: "T4",
        qZh: "诗中最后一个“又”字极具艺术表现力，请引导分析其中蕴含的复杂情感。",
        qPy: "shī zhōng zuì hòu yí gè yòu zì jí jù yì shù biǎo xiàn lì qǐng yǐn dǎo fān xī qī zhōng yùn hán de fù zá qíng gǎn",
        qEn: "The word 'again (又)' in the last line is highly expressive. Please analyze the complex emotions embedded within it.",
        sZh: [
            "1. 第一步：“又”字说明两人这次重逢是事先约好的，还是完全没有料到的偶遇？",
            "2. 第二步：在千里之外、饱经战乱的异乡相逢，心里除了有一丝惊喜，更多的是什么感触？",
            "3. 第三步：昔日的宫廷超级巨星，如今竟然和自己一样沦为流亡难民，这个“又”字表现了什么叹息？"
        ],
        sPy: [
            "yī dì yī bù yòu zì shuō míng liǎng rén zhè cì chóng féng shì shì xiān yuē hǎo de hái shì wán quán méi liào dào de ǒu yù",
            "èr dì èr bù zài qiān lǐ zhī wài bǎo jīng zhàn luàn de yì xiāng xiāng féng xīn lǐ chú le yǒu yī sī jīng xǐ gèng duō de shì shén me gǎn chù",
            "sān dì sān bù xī rì de gōng tíng chāo jí jù xīng rú jìn jìng rán hé zì jǐ yī yàng lún wéi liú wáng nàn mín zhè gè yòu zì biǎo xiàn le shén me tàn xī"
        ],
        sEn: "Step 1: Does the word 'again' show that this reunion was planned or a completely unexpected encounter?<br>Step 2: Meeting in a war-torn land thousands of miles away, what feeling dominates besides a trace of pleasant surprise?<br>Step 3: The former imperial superstar is now a refugee just like the poet. What tragic sigh does this word capture?",
        aZh: "一个“又”字内涵极其深厚。它首先包含了在饱经战乱后、在千里之外的异乡突然与故人相逢的惊异与唏嘘；更深层的是包含了解脱不掉的同病相怜之悲——昔日盛世的艺术巨星，如今竟和自己一样沦落天涯。这个字将重逢的戏剧性与生命浮沉的沧桑感完美熔于一炉。",
        aPy: "yí gè yòu zì nèi hán jí qí shēn hòu tā shǒu xiān bāo hán le zài bǎo jīng zhàn luàn hòu zài qiān lǐ zhī wài de yì xiāng tū rán yǔ gù rén xiāng féng de jīng yì yǔ xī xū gèng shēn céng de_shì bāo hán le jiě tuō bù diào de tóng bìng xiāng lián zhī bēi xī rì shèng shì de yì shù jù xīng rú jìn jìng hé zì jǐ yī yàng lún luò tiān yá zhè gè zì jiāng chóng féng de xì jù xìng yǔ shēng mìng fú chén de cāng sāng gǎn wán měi róng yú yī lú",
        aEn: "The word 'again' is heavily charged. It registers the initial shock and melancholy joy of running into an old companion miles away from home. Yet, it heavily underscores a profound collective tragedy: that the once glorious star of the imperial court is now a homeless wanderer, just like Du Fu himself."
    },
    {
        id: "T5",
        qZh: "这首诗全篇没有用一个伤感的字眼，为什么却被公认为“大唐盛世的时代挽歌”？",
        qPy: "zhè shǒu shī quán piān méi yǒu yòng yí gè shāng gǎn de zì yǎn wèi shén me qù bèi gōng rèn wéi dà táng shèng shì de shí dài wǎn gē",
        qEn: "This poem contains not a single overtly sorrowful word. Why is it universally recognized as the 'elegy of the Tang golden age'?",
        sZh: [
            "1. 第一步：这首诗的切入点很小，它记录的是国家的宏大叙事，还是两个普通老朋友的际遇？",
            "2. 第二步：这两位老朋友（杜甫与李龟年）在历史上分别代表了开元盛世文艺界的什么高峰？",
            "3. 第三步：通过这两个人晚年的凄凉重逢，读者能联想到背后哪一个伟大时代的轰然倒塌？"
        ],
        sPy: [
            "yī dì yī bù zhè shǒu shī de qiē rù kǒu hěn xiǎo tā jì lù de shì guó jiā de hóng dà xù shì hái shì liǎng gè pǔ tōng lǎo péng yǒu de jì yù",
            "èr dì èr bù zhè liǎng wèi lǎo péng yǒu zài lì shǐ shàng fēn bié dài biǎo le kāi yuán shèng shì wén yì jiè de shén me gāo fēng",
            "sān dì sān bù tōng guò zhè liǎng gè rén wǎn nián de qī liáng chóng féng dú zhě néng lián xiǎng dào bèi hòu nǎ yí gè wěi dà shí dài de hōng rán dǎo tā"
        ],
        sEn: "Step 1: The entry point of this poem is very small. Does it record grand national narratives or simply the encounter of two old friends?<br>Step 2: Historically, what cultural summits of the Kaiyuan Golden Age did these two friends respectively represent?<br>Step 3: Through the desolate twilight reunion of these two giants, what monumental collapse of a great era are readers led to realize?",
        aZh: "因为这首诗运用了以小见大的至高境界。它通过李龟年和杜甫这两位盛世文艺标志性人物的个人命运，折射出了整个国家气运的剧烈转折。它将个人身世的“飘零之悲”完美融入到国家“盛衰之痛”中，言字平淡却字字千钧，在一场看似平静的重逢叙事中，完成了对大唐盛世最深沉的祭奠。",
        aPy: "yīn wèi zhè shǒu shī yùn yòng le yǐ xiǎo jiàn dà de zhì gāo jìng jiè tā tōng guò lǐ guī nián hé dù fǔ zhè liǎng wèi shèng shì wén yì biāo zhì xìng rén wù de gè rén mìng yùn zhé shè chū le zhěng gè guó jiā qì yùn de jù liè zhuǎn zhé tā jiāng gè rén shēn shì de piāo líng zhī bēi wán měi róng rù dào guó jiā shèng cuī zhī tòng zhōng yán zì píng dàn què zì zì qiān jūn zài yī chǎng kàn sì píng jìng de chóng féng xù shì zhōng wán chéng le duì dà táng shèng shì zuì shēn chén de jì diàn",
        aEn: "Because with absolute economy of words, it maps the tragic collapse of an empire through the shared displacement of its two prime cultural eyewitnesses. By combining personal exile with national grief, this seemingly plain casual encounter subtly functions as a powerful, devastating funeral song for the entire golden age."
    }
];

console.log("成功加载：jiangnan_shortq 5题高阶引导完整版");
