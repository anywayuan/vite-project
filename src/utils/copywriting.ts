const textList: string[] = [
  '今天在街上碰见了一个老同学 没想到他现在过得这么磕碜 只往我碗里放了一个硬币。',
  '有人喜欢玩养成类游戏吗 每天给我一百块 看我茁壮成长。',
  '约了三次不出来的女生就互删吧，诸葛亮都没你难请。',
  '在吗？借我两百块钱 你没有没关系 我先用着我自己的 等你有了再还给我可以吗。',
  '我妈经常说我是从垃圾堆里捡的，所以我格外喜欢吃垃圾食品，因为有家的味道。',
  '我刚准备坠入爱河，可是河神和我说，不要往河里扔垃圾。',
  '听有些人说 有时在外忙碌一天很累 但回家听到孩子喊一声 “爸爸” 就觉得一身疲惫都是值得的 我今天累了 你能喊我一声爸爸吗 我也想充满正能量 谢谢你。',
  '我在大街上摔倒了 周围人都对我笑 气的我爬起来又摔了好几次 笑死他们。',
  '钥匙圈是非常实用的小工具，它可以让你，一次把所有钥匙都丢光。',
  '我不敢把房间打扫得太干净 我怕打扫太干净 房间里唯一的垃圾就只剩下我了。',
  '说不上你哪里好，就是想看你洗澡。',
  '你在阳台抽烟 你抽一半 风抽一半 你没跟风计较 可能风也有烦恼吧 你事后越想越气 于是抽起风来。',
  '如果你肯花一点时间来了解我，你就会发现，你浪费了一点时间。',
  '喜欢熬夜的年轻人有救了！可以用草果、白芷、积壳、桂皮、肉蔻、砂仁、甘草各15克磨成粉，冲水每日口服，这样的话猝死后火化会比较香！',
  '我揪住了一只蝉 让我以为揪住了夏天 谁知道蝉说:说不上爱别揪蝉。',
  '床前明月光，疑是明月光。',
  '最近头有点痒 我该不会是.......要长脑子了吧。',
  '老有人问我对象怎么样，我对象很好，我对羊也很好，对猪也不错，我很善良谢谢。',
  '不开心我就去打排位，你们也别想开心。',
  '愿得一人心 免得老相亲。',
  '喜欢一个人太累了，所以我要喜欢十个。',
  '有糖尿病的请让一让，不要让他尝到甜头。',
  '下个月想和老婆去旅游，大家推荐一下，谁的老婆比较好……',
  '做我的男朋友，我会保护你，不让我其他男朋友发现你。',
  '开玩笑，我怎么舍得让你滚呢，我弄死你还来不及呢。',
  '你好，我现在有事，待会也不会联系你。',
  '遇到好看的女孩子不要马上追，因为，她的朋友可能比她更好看。',
  '我现在要抓一个小孩子来煲汤，到底是谁这么幸运呢？',
  '你要是再不理我我就真的成了狗不理了。',
  '打架为什么喜欢脱上衣？脱裤子的话，气氛会很尴尬的。',
  '假如生活欺骗了你，不要着急，拿起美颜相机去欺骗生活。',
  '多交几个男朋友怎么了？我打字快又不是聊不过来。',
  '我要做老婆饼了，到底是哪个老婆这么幸运呢？',
  '每天早上起床我都会看一眼富豪榜，如果上面没有我的名字，我就去上班，如果有，我就去看病。',
  '看鞠婧祎一口面包嚼33下被夸，我也学着嚼这么多下，我妈骂我不想吃就滚一边去。',
  '心情不好去打了两把游戏，突然发现其实刚才心情挺好的。',
  '如果你有喜欢的女生，就送她一支口红吧，至少在明天她亲别人的时候，你还有参与感。',
  '每天少吃一顿饭 ，时间一长就省下很大一笔钱，这笔钱留着日后看胃病用。',
  '没钱用的时候跟我说，让我知道不止我一个人，没钱用。',
  '我怕麻烦说没下拼多多，他们更兴奋了，说新用户砍得多。',
  '告诉大家，打游戏真的能找到男朋友，我男朋友就是在游戏里跟别人跑了。',
  '女朋友不用多，有三五个真心的就够了。',
  '他从来没说过爱我，我搜聊天记录“爱”都是爱奇艺会员借一下。',
  '麻烦大家说一下我的缺点，有什么说什么没关系。评论里抽五个拉黑。',
  '我对你还不够特别？几千人列表里，就你在黑名单。',
  '做人要谦虚一点，多听听他人的意见，然后认真记下，对你有意见的都有谁。',
  '我真的很奇怪，一样都是上网冲浪，怎么你们能网恋，而我只能发沙雕段子？',
  '泼出去的水，老子连盆都不要了。',
  '快过年了，大家ATM取款时注意用手遮挡，以防被不法分子看到笑话。',
  '你以为我会伤心吗？我已经吃了好几年的喜之郎，心早就在外太空了。',
  '恋爱要跟云南人谈，他们画的饼里有鲜花。',
  '同样是一句“不要”，有的人讲出来又欲又勾人，你讲出来像在斗地主。',
  '3句话让男人给我花了18w：①帅哥 ②车技不错啊 ③给我撞这么远出来',
  '想到明天还有很多事做，我直接睡到后天。',
  '我发誓我再也不熬夜了，我要是再熬夜我就再发誓。',
  '这辈子虽然没红过，但被绿过，知足了。',
  '我有对象啦，谢谢大家的关心！目前暂时还不打算公开，因为关系不大稳定，有时候梦不到。',
  '是金子总会发光，可我是铁子。',
  '大海真的太恐怖了，当年泰坦尼克号出海的时候，我喉咙都喊哑了，不让他们出海。非但不听，居然还把我从电影院赶了出来。',
  '睡不着，希望睡着的人窜稀。',
  '以前丑，不好意思发自拍，现在不一样了，现在脸皮厚了。',
  '她们为情所困，而我比狗困。',
  '你怎么长得跟二维码似的，不扫一下都不知道你是什么东西。',
  '你很会下厨吧，看你挺会添油加醋的。',
  '你卖水管的吗?管这么多。',
  '你象棋下的挺好的吧，看你马后炮挺在行的。',
  '你瞅你那五官，各长各的，谁都不服谁。',
  '真羡慕你脸上的皮肤，保养得真厚。',
  '你不去当厨师可惜了，甩锅甩的这么厉害。',
  '你长脑袋只是为了让自己看起来高点么。',
]

export default textList
