/**
 * 互动古文教学平台 - 《江南逢李龟年》客观题数据包 (5题·高辨析度4选项对齐版)
 */

const quizQuestions = [
    {
        id: 1,
        text: "诗中“落花时节”一词除了交代暮春季节，其深层隐喻最准确的是什么？",
        py: "shī zhong luò huā shí jié yī cí chú le jiāo dài mù chūn jì jié qí shēn céng yǐn yù zuì zhǔn què de shì shén me",
        en: "Besides indicating late spring, what does the phrase 'falling blossoms season' metaphorically imply?",
        options: [
            {
                text: "个人身世漂泊 / 国家由盛转衰",
                py: "gè rén shēn shì piāo bó guó jiā yóu shèng zhuǎn cuī",
                en: "Personal displacement / National decline from prosperity into ruin.",
                correct: true,
                explanation: "正确！“落花时节”是一语双关，既指自然界百花凋零的暮春，更深层隐喻了唐王朝在安史之乱后由盛转衰的国运，以及诗人和音乐家个人晚年流落他乡的悲惨命运。",
                explanationPy: "zhèng què luò huā shí jié shì yī yǔ shuāng guān jì zhǐ zì rán jiè bǎi huā diāo líng de mù chūn gèng shēn céng yǐn yù le táng wáng cháo jīng lì ān shǐ zhī luàn hòu yóu shèng zhuǎn cuī de guó yùn yǐ jí shī rén hé yīn yuè jiā gè rén wǎn nián liú luò tā xiāng de bēi cǎn mìng yùn",
                explanationEn: "Correct! 'Falling blossoms season' is a pun, referring both to late spring and metaphorically to the Tang Dynasty's decline and the individuals' tragic wandering."
            },
            {
                text: "战乱彻底结束 / 迎来和平曙光",
                py: "zhàn luàn chè dǐ jié shù yíng lái hé píng shǔ guāng",
                en: "The complete end of the war / Welcoming the dawn of peace.",
                correct: false,
                explanation: "干扰项分析：此项极易误导学生以为重逢是好兆头。实际上当时社会的动荡和衰败并未停止，杜甫与李龟年此时都处于极为凄凉的流亡状态，并无和平曙光。",
                explanationPy: "gān rǎo xiàng fān xī cǐ xiàng jí yì wù dǎo xué shēng yǐ wéi chóng féng shì hǎo zhào tou shí jì shàng dāng shí shè huì de dòng dàng hé cuī bài bìng wèi tíng zhǐ dù fǔ yǔ lǐ guī nián cǐ shí dōu chǔ yú jí wéi qī liáng de liú wáng zhuàng tài bìng wú hé píng shǔ guāng",
                explanationEn: "Distractor Analysis: This incorrectly implies a happy ending. In reality, the social decline continued, and both individuals were in a miserable state of exile."
            },
            {
                text: "宫廷乐坛重组 / 艺术重现辉煌",
                py: "gōng tíng yuè tán chóng zǔ yì shù chóng xiàn huī huáng",
                en: "The reorganization of court music / Artistic revival of glory.",
                correct: false,
                explanation: "干扰项分析：混淆了李龟年“宫廷乐师”的身份。李龟年此时在江南是以卖唱乞讨为生，宫廷乐坛早已随着大唐盛世的崩溃而烟消云散，绝非重现辉煌。",
                explanationPy: "gān rǎo xiàng fān xī hún xiáo le lǐ guī nián gōng tíng yuè shī de shēn fèn lǐ guī nián cǐ shí zài jiāng nán shì yǐ mài chàng qǐ tǎo wéi shēng gōng tíng yuè tán zǎo yǐ suí zhe dà táng shèng shì de bēng kuì ér yān xiāo yún sàn jué fēi chóng xiàn huī huáng",
                explanationEn: "Distractor Analysis: Confuses Li's musician status. He was singing for a living as a beggar; the imperial court music environment had collapsed entirely."
            },
            {
                text: "故乡亲人团聚 / 摆脱漂泊命运",
                py: "gù xiāng qīn rén tuán jù bǎi tuō piāo bó mìng yùn",
                en: "Reunion with family in hometown / Escaping the fate of drifting.",
                correct: false,
                explanation: "干扰项分析：利用了“逢”字的字面意思。其实两人是在相隔千里的异乡（湖南长沙）偶遇，而不是在家乡，且两人的漂泊命运直到去世都未能摆脱。",
                explanationPy: "gān rǎo xiàng fān xī lì yòng le féng zì de zì miàn yì sī qí shí liǎng rén shì zài xiāng gé qiān lǐ de yì xiāng cháng shā ǒu yù ér bú shì zài jiā xiāng qiě liǎng rén de piāo bó mìng yùn zhí dào qù shì dōu wèi néng bǎi tuō",
                explanationEn: "Distractor Analysis: Plays on the word 'meet'. They met in a distant place of exile (Changsha), not their hometown, and their tragic drifting never ended."
            }
        ]
    },
    {
        id: 2,
        text: "诗中的“正是江南好风景”采用了“以乐景衬哀情”的手法，其主要艺术目的是什么？",
        py: "shī zhōng de zhèng shì jiāng nán hǎo fēng jǐng cǎi yòng le yǐ lè jǐng chèn āi qíng de shǒu fǎ qí zhǔ yào yì shù mù dì shì shén me",
        en: "What is the main artistic purpose of using cheerful scenery to contrast with sorrowful emotions in line 3?",
        options: [
            {
                text: "用风景之美 / 反衬人事凋零之悲",
                py: "yòng fēng jǐng zhī měi fǎn chèn rén shì diāo líng zhī bēi",
                en: "Using the beauty of nature / To contrast with the tragedy of human displacement.",
                correct: true,
                explanation: "正确！江南暮春的风光越是秀丽迷人，越能反衬出两位见证了开元盛世的老人如今流落他乡、穷困潦倒的处境之凄凉，使内心的沧桑与悲慨加倍放大。",
                explanationPy: "zhèng què jiāng nán de mù chūn fēng jǐng yué shì xiù lǐ mí rén yué néng fǎn chèn chū liǎng wèi jiàn zhèng le kāi yuán shèng shì de lǎo rén rú jìn liú luò tā xiāng qióng kùn liáo dǎo de chǔ jìng zhī qī liáng shǐ nèi xīn de cāng sāng yǔ bēi kǎi jiā bèi fàng dà",
                explanationEn: "Correct! The more beautiful the scenery of Jiangnan, the more poignant it makes their impoverished refugee reality, amplifying their profound grief."
            },
            {
                text: "极力赞美江南 / 表达对南方的向往",
                py: "jí lì zàn měi jiāng nán biǎo dá duì nán fāng de xiàng wǎng",
                en: "Praising Jiangnan intensely / Expressing a longing for the South.",
                correct: false,
                explanation: "干扰项分析：流于表面。杜甫晚年流落江南是迫于战乱、无家可归，此处的“好风景”绝非旅游赞美，而是带有极其沉重的身世之感。",
                explanationPy: "gān rǎo xiàng fān xī liú yú biǎo miàn dù fǔ wǎn nián liú luò jiāng nán shì pò yú zhàn luàn wú jiā kě guī cǐ chù de hǎo fēng jǐng jué fēi lǚ yóu zàn měi ér shì dài yǒu jí qí chén zhòng de shēn shì zhī gǎn",
                explanationEn: "Distractor Analysis: Too superficial. Du Fu drifted south due to war and homelessness; this is not a literal appreciation of a travel destination."
            },
            {
                text: "转移悲伤情绪 / 寄情山水寻求慰藉",
                py: "zhuǎn yí bēi shāng qíng xù jì qíng shān shuǐ xún qiú wèi jiè",
                en: "Diverting sad emotions / Seeking solace in landscapes.",
                correct: false,
                explanation: "干扰项分析：文学评论常见套话，容易误导学生。本诗的基调是一悲到底，“好风景”不仅没有减轻悲伤，反而通过反衬让离落之悲更加沉重。",
                explanationPy: "gān rǎo xiàng fān xī wén xué píng lùn cháng jiàn tào huà róng yì wù dǎo xué shēng běn shī de jī tiào shì yī bēi dào dǐ hǎo fēng jǐng bù jǐn méi yǒu jiǎn qīng bēi shāng fǎn ér tōng guò fǎn chèn ràng lí luò zhī bēi gèng jiā chén zhòng",
                explanationEn: "Distractor Analysis: Standard literary phrasing that easily misleads. The poem is deeply sorrowful; the landscape amplifies the grief rather than comforting it."
            },
            {
                text: "写实记录天气 / 交代重逢时的气候",
                py: "xiě shí jì lù tiān qì jiāo dài chóng féng shí de qì hòu",
                en: "Providing a realistic record of weather / Stating the climate during the reunion.",
                correct: false,
                explanation: "干扰项分析：纯写实主义的机械解读。中国古典诗词讲究“一切景语皆情语”，“好风景”和“落花”都是高度文学化的意象，而非天气预报。",
                explanationPy: "gān rǎo xiàng fān xī chún xiě shí zhǔ yì de jī xiè jiě dú zhōng guó gǔ diǎn shī cí jiǎng jiū yī qiè jǐng yǔ jiē qíng yǔ hǎo fēng jǐng hé luò huā dōu shì gāo dù wén xué huà de yì xiàng ér fēi tiān qì yù bào",
                explanationEn: "Distractor Analysis: A mechanical literal reading. Classical Chinese poetry embeds emotions into scenery; it is not a mere dry meteorological log."
            }
        ]
    },
    {
        id: 3,
        text: "关于诗中“岐王宅里寻常见”中的“寻常”，最符合古汉语语境的解释是什么？",
        py: "guān yú shī zhōng qí wáng zhái lǐ xún cháng jiàn zhōng de xún cháng zuì fú hé gǔ hàn yǔ yǔ jìng de jiě shì shì shén me",
        en: "What is the most accurate explanation of '尋常 (xúncháng)' within the classical context?",
        options: [
            {
                text: "平常 / 经常 / 属于屡见不鲜",
                py: "píng cháng jīng cháng shǔ yú lǚ jiàn bù xiān",
                en: "Commonly / Frequently / Being a regular occurrence",
                correct: true,
                explanation: "正确。“寻常”在此处表示频率极高。回想当年在岐王府邸，两人的见面与听歌就像日常便饭一样频繁，以此来反衬如今江南重逢的极其不易与珍贵。",
                explanationPy: "zhèng què xún cháng zài cǐ chù biǎo shì pín lǜ jí gāo huí xiǎng dāng nián zài qí wáng fǔ dǐ liǎng rén de jiàn miàn yǔ tīng gē jiù xiàng rì cháng biàn fàn yī yàng pín fán yǐ cǐ lái fǎn chèn rú jìn jiāng nán chóng féng de jí qí bù yì yǔ zhēn guì",
                explanationEn: "Correct. 'Xúncháng' means high frequency here, highlighting how casual and regular their prestigious meetings used to be, contrasting with today's rare encounter."
            },
            {
                text: "古代 长度 单位 / 指八尺和寻",
                py: "gǔ dài cháng dù dān wèi zhǐ bā chǐ hé xún",
                en: "Ancient measurement of length / Referring to eight chi and xun.",
                correct: false,
                explanation: "干扰项分析：这是极高级的文言字义干扰项！“寻”和“常”在古代确实是长度单位（八尺为寻，倍寻为常），但放在这句诗中作动词修饰语完全讲不通。",
                explanationPy: "gān rǎo xiàng fān xī zhè shì jí gāo jí de wén yán zì yì gān rǎo xiàng xún hé cháng zài gǔ dài què shí shì cháng dù dān wèi bā chǐ wéi xún bèi xún wéi cháng dàn fàng zài zhè jù shī zhōng zuò dòng cí xiū shì yǔ wán quán jiǎng bù tōng",
                explanationEn: "Distractor Analysis: A highly sophisticated lexical distractor! While 'xun' and 'chang' are ancient length units literally, that definition makes no sense here as a modifier."
            },
            {
                text: "寻觅 常人 / 寻找李龟年的踪迹",
                py: "xún mì cháng rén xún zhǎo lǐ guī nián de zōng jī",
                en: "Seeking ordinary people / Searching for Li Guinian's traces.",
                correct: false,
                explanation: "干扰项分析：针对不理解词义、喜欢“望文生义”硬拆汉字的学生设计的。诗中并没有寻找的意思，而是指过去经常见面。",
                explanationPy: "gān rǎo xiàng fān xī zhēn duì bù lǐ jiě cí yì xǐ huān wàng wén shēng yì yìng chāi hàn zì de xué shēng shè jì de shī zhōng bìng méi yǒu xún zhǎo de yì sī ér zhǐ guò qù jīng cháng jiàn miàn",
                explanationEn: "Distractor Analysis: Targeted at students who split compounds literally. There is no intent of 'searching' implied; it specifies past habit."
            },
            {
                text: "平庸 卑微 / 形容岐王府邸简陋",
                py: "píng yōng bēi wēi xíng róng qí wáng fǔ dǐ jiǎn lòu",
                en: "Mediocre and humble / Describing Prince Qi's mansion as simple.",
                correct: false,
                explanation: "干扰项分析：利用现代汉语“寻常（普通平庸）”的现代语义进行干扰。岐王是顶级权贵，其府邸不可能简陋，“寻常”修饰的是“见”而非“宅”。",
                explanationPy: "gān rǎo xiàng fān xī lì yòng xiàn dài hàn yǔ xún cháng de xiàn dài yǔ yì jìn háng gān rǎo qí wáng shì dǐng jí quán guì qí fǔ dǐ bù kě néng jiǎn lòu xún cháng xiū shì de shì jiàn ér fēi zhái",
                explanationEn: "Distractor Analysis: Leverages the modern meaning of 'mediocre/ordinary'. Prince Qi was top royalty; his mansion wasn't humble. 'Xúncháng' modifies 'met', not 'mansion'."
            }
        ]
    },
    {
        id: 4,
        text: "结合全诗历史背景，杜甫和李龟年这两位开元盛世的见证者，是因为哪一场历史浩劫而流落江南的？",
        py: "jié hé quán shī lì shǐ bèi jǐng dù fǔ hé lǐ guī nián zhè liǎng wèi kāi yuán shèng shì de jiàn zhèng zhě shì yīn wèi nǎ yì chǎng lì shǐ hào jié ér liú luò jiāng nán de",
        en: "According to the historical background, through which historical catastrophe did they drift to Jiangnan?",
        options: [
            {
                text: "安史之乱 / 唐朝由盛转衰 的 战乱",
                py: "ān shǐ zhī luàn táng cháo yóu shèng zhuǎn cuī de zhàn luàn",
                en: "The An-Shi Rebellion / The war that turned Tang from prosperity to decline.",
                correct: true,
                explanation: "正确。安史之乱不仅摧毁了开元盛世的繁华，也导致大量宫廷艺人和文人流亡南方。本诗正是这场大动乱后时代变迁的真实缩影。",
                explanationPy: "zhèng què ān shǐ zhī luàn bù jǐn cuī huǐ le kāi yuán shèng shì de fán huá yě dǎo zhì dà liàng gōng tíng yì rén hé wén rén liú wáng nán fāng běn shī zhèng shì zhè chǎng dà dòng luàn hòu shí dài biàn qiān de zhēn zhēn suō yǐng",
                explanationEn: "Correct. The An-Shi Rebellion shattered the empire's golden age, scattering court musicians and literati to the south as impoverished refugees."
            },
            {
                text: "黄巢起义 / 唐代 末期 的 农民 战争",
                py: "huáng cháo qǐ yì táng dài mò qī de nóng mín zhàn zhēng",
                en: "The Huang Chao Rebellion / A peasant war in the late Tang Dynasty.",
                correct: false,
                explanation: "干扰项分析：同为唐代重大动乱，极具迷惑性。但黄巢起义发生在晚唐时期（乾符年间），而杜甫和李龟年生活在盛唐转中唐时期，相差了一百多年。",
                explanationPy: "gān rǎo xiàng fān xī tóng wéi táng dài zhòng dà dòng luàn jí jù mí huò xìng dàn huáng cháo qǐ yì fā shēng zài wǎn táng shí qī ér dù fǔ hé lǐ guī nián shēng huó zài shèng táng zhuǎn zhōng táng shí qī xiāng chà le yī bǎi duō nián",
                explanationEn: "Distractor Analysis: Another major Tang rebellion, highly confusing. However, Huang Chao's revolt occurred in the late Tang, over a century after Du Fu's era."
            },
            {
                text: "藩镇割据 / 地方 将领 长期 的 混战",
                py: "fān zhèn gē jù dì fāng jiāng lǐng cháng qī de hùn zhàn",
                en: "Warlordism (Fanzhen) / Long-term infighting among regional generals.",
                correct: false,
                explanation: "干扰项分析：藩镇割据确实是中晚唐的社会顽疾，但它是安史之乱后逐渐形成的长期政治局面，并不是直接导致他们两人瞬间流落江南的突发性浩劫根源。",
                explanationPy: "gān rǎo xiàng fān xī fān zhèn gē jù què shí shì zhōng wǎn táng de shè huì wán jí dàn tā shì ān shǐ zhī luàn hòu zhú jiàn xíng chéng de cháng qī zhèng zhì jú miàn bìng bú shì zhí jiē dǎo zhì tā liǎng rén shùn jiān liú luò jiāng nán de tū fā xìng hào jié gēn yuán",
                explanationEn: "Distractor Analysis: Warlordism was indeed a Tang issue, but it was a gradual political condition post-rebellion, not the sudden trigger event driving their flight."
            },
            {
                text: "靖康之难 / 北宋 灭亡 的 历史 悲剧",
                py: "jìng kāng zhī nàn běi sòng miè wáng de lì shǐ bēi jù",
                en: "The Jingkang Incident / The tragic fall of the Northern Song Dynasty.",
                correct: false,
                explanation: "干扰项分析：中国文学史上另一个著名的“盛衰悲剧”历史节点（常常与清照词并提）。部分历史概念模糊的学生容易把大唐的盛衰与大宋的灭亡记混。",
                explanationPy: "gān rǎo xiàng fān xī zhōng guó wén xué shǐ shàng lìng yí gè zhe míng de shèng cuī bēi jù lì shǐ jié diǎn bù fèn lì shǐ gài niàn mó hu de xué shēng róng yì bǎ dà táng de shèng cuī yǔ dà sòng de miè wáng jì hún",
                explanationEn: "Distractor Analysis: Another monumental tragedy of decline in Chinese history (often paired with Li Qingzhao). Students with blurry history concepts might confuse Tang and Song."
            }
        ]
    },
    {
        id: 5,
        text: "关于全诗“前两句极写过去，后两句突转现在”的结构布局，以下分析最精准的是哪一项？",
        py: "guān yú quán shī qián liǎng jù jí xiě guò qù hòu liǎng jù tū zhuǎn xiàn zài de jié gòu bù jù yǐ xià fān xī zuì jǐn què de shì nǎ yī xiàng",
        en: "Which structural analysis of the 'past-to-present transition' between the first and second halves is the most precise?",
        options: [
            {
                text: "通过 昔盛今衰 强烈 对比 / 寄托 沧桑 悲慨",
                py: "tōng guò xī shèng jīn cuī qiáng liè duì bǐ jì tuō cāng sāng bēi kǎi",
                en: "Using a stark contrast between past glory and present misery / Conveying profound melancholy.",
                correct: true,
                explanation: "正确！前两句通过豪门听歌极力渲染当年的繁华与安宁，后两句突然跌落到现实中江南相逢的落魄。这种结构在短短28字内制造了巨大的艺术张力，将国破家亡的时代悲剧表现得淋漓尽致。",
                explanationPy: "zhèng què qián liǎng jù tōng guò háo mén tīng gē jí lì xuàn rǎn dāng nián de fán huá yǔ ān níng hòu liǎng jù tū rán diē luò dào xiàn shí zhōng jiāng nán xiāng féng de luò pò zhè zhǒng jié gòu zài duǎn duǎn èr shí bā zì nèi zhì zào le jù dà de yì shù zhāng lì jiāng guó pò jaí wáng de shí dài bēi jù biǎo xiàn de lín lí jìn zhì",
                explanationEn: "Correct! The first half builds up the past luxury, while the second half drops into the desolate present. This creates massive artistic tension to reflect the historic tragedy."
            },
            {
                text: "前后 情感 一脉相承 / 表达 始终如一 的 喜悦",
                py: "qián hòu qíng gǎn yī mài xiàng chéng biǎo dá shǐ zhōng rú yī de xǐ yuè",
                en: "The emotions connect seamlessly throughout / Expressing consistent joy from beginning to end.",
                correct: false,
                explanation: "干扰项分析：完全看错情感基调。前后的情感存在巨大的断裂和对比，绝对不是“喜悦”，而是夹杂着极其沉痛的离散之悲。",
                explanationPy: "gān rǎo xiàng fān xī wán quán kàn cuò qíng gǎn jī tiào qián hòu de qíng gǎn cún zài jù dà de duàn liè hé duì bǐ jué duì bú shì xǐ yuè ér shì jiá zá zhe jí qí chén zhòng de lí sàn zhī bēi",
                explanationEn: "Distractor Analysis: Completely misreads the emotional tone. There is a massive structural fracture and emotional contrast, definitely not sustained 'joy'."
            },
            {
                text: "前半部分 纯属 虚构 回忆 / 后半部分 才是 写实",
                py: "qián bàn bù fèn chún shǔ xū gòu huí yì hòu bàn bù fèn cái shì xiě shí",
                en: "The first half is entirely fabricated memories / Only the second half is realistic.",
                correct: false,
                explanation: "干扰项分析：考查文学真实性。前两句并非虚构，杜甫年轻时确实在长安频繁出入权贵府邸，亲眼见证过开元盛世。前后都是写实，只是时间跨度巨大。",
                explanationPy: "gān rǎo xiàng fān xī kǎo chá wén xué zhēn shí xìng qián liǎng jù bìng fēi xū gòu dù fǔ nián qīng shí què shí zài cháng ān pín fán chū rù quán guì fǔ dǐ qīn yǎn jiàn zhèng guò kāi yuán shèng shì qián hòu dōu shì xiě shí zhǐ shì shí jiān kuà dù jù dà",
                explanationEn: "Distractor Analysis: Tests historical realism. The first two lines are not fabricated; Du Fu actually frequented those palaces in his youth during the golden era."
            },
            {
                text: "倒叙 手法 / 先交代 结局 再 追溯 缘由",
                py: "dào xù shǒu fǎ xiān jiāo dài jié jú zài zhuī sù yuán yóu",
                en: "Flashback technique / Stating the outcome first then tracing the causes.",
                correct: false,
                explanation: "干扰项分析：考查叙事结构常识。这首诗是标准的“顺叙”时间线（先写过去，再写现在），而非先写现在再追溯过去的倒叙，容易把结构概念混淆。",
                explanationPy: "gān rǎo xiàng fān xī kǎo chá xù shì jié gòu cháng shí zhè shǒu shī shì diǎn xíng de shùn xù shí jiān xiàn xiān xiě guò qù zài xiě xiàn zài ér fēi xiān xiě xiàn zài zài zhuī sù guò qù de dào xù róng yì bǎ jié gòu gài niàn hún xiáo",
                explanationEn: "Distractor Analysis: Tests basic structural taxonomy. The poem follows a chronological timeline (past then present), not a flashback structure."
            }
        ]
    }
];

console.log("成功升级：jiangnan_quiz 高质量4选项对齐版题库");
