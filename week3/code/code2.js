import React, {Component} from 'react'
import { ScrollView , View , StatusBar , Text , Image , StyleSheet , TouchableWithoutFeedback }
  from 'react-native'

const contents=`
大将军何进率先得到了《三国演义》，揣摩字眼苦思冥想地解读了一晚上。
次日，宣董卓入朝。杀之。 宣吕布入朝，收为义子。
恢复西域都护，表典军校尉曹操为西域都护，送到西域。
宣高唐县令刘备入朝，杀之。 宣乌程侯孙坚入朝，杀之。
表袁绍为南海太守。 答应刘焉出任交州刺史的请求，换刘表为益州刺史。
过了十年，汉少帝密诏十常侍谋诛何进，事泄，何进杀十常侍，天下诸侯震动，割据四起。
西域都护曹操率韩遂马腾入京，何进赶紧读取存档……

大将军何进率先得到了《三国演义》，揣摩字眼苦思冥想地解读了一晚上。
次日，宣董卓入朝。杀之。
宣吕布入朝，收为义子。
杀曹操。
宣高唐县令刘备入朝，杀之。
宣乌程侯孙坚入朝，杀之。
杀袁绍。
杀刘焉刘表。
王允找到吕布，杀何进。
何进危急之时读取存档……

大将军何进率先得到了《三国演义》，揣摩字眼苦思冥想地解读了一晚上。
次日，杀王允。
宣董卓入朝。
董卓率军入朝，何进读取存档……

大将军何进率先得到了《三国演义》，揣摩字眼苦思冥想地解读了一晚上。
通过几次读取进度，何进坚信这上面写的都是假的。
历史照旧进行，十常侍杀何进前何进吓尿，赶紧读取存档……

大将军何进率先得到了《三国演义》，揣摩字眼苦思冥想地解读了一晚上。
何进找来曹操，邀曹操共读《三国演义》。 次日，曹操主动请求去当西域都护。
送行前何进细思极恐，派人谋诛曹操，曹操逃脱。何进细思极极极恐，欲烧掉《三国演义》，犹豫之后还是没烧。
何进找到何太后，兄妹共同研读《三国演义》。 兄妹苦读一夜。
十常侍宣布何进兄妹乱伦，袁绍率西园新军杀向大将军府，何进赶紧读取进度。

大将军何进率先得到了《三国演义》，揣摩字眼苦思冥想地解读了一晚上。
次日，杀十常侍。 何进抱着《三国演义》越看越怕，精神崩溃。
董太后以大将军疯癫为名，密令董卓入京清君侧。
董卓率军入京。 何进读取存档。

大将军何进率先得到了《三国演义》，揣摩字眼苦思冥想地解读了一晚上。
汉大将军何进自刎，死前屋内只有一堆纸灰。

系统自动读取进度。
大将军何进抱着《三国演义》大哭一夜。
这是一本妖书。
大将军何进请来仙人于吉，将《三国演义》烧成纸灰，以符咒封印，取高祖斩蛇剑压制。
何苗看到兄长举动疯癫，问何故。
何进将大将军印交给他，狂笑离去。
何进早已看穿了一切！
他可以读取进度！ 有此等逆天之能，此生何惧！
进度读取中……
回到二十年前的南阳，何进抓起久违的宰羊刀，流出了浑浊的泪水。
他拒绝了妹妹的提携，只想做一个安静的屠子。
通过多次读取进度，何进掌握了娴熟无比的屠宰技术和羊肉料理技术。
三十年后，声震天下。
丞相曹操最喜欢吃何进的羊肉，也很欣赏何进看待自己是不卑不亢的眼神。
“何叟，我看你也是个人物啊。”
何进早已看淡了一切，悠悠一笑，他那天生的脑袋大脖子粗的伙夫气质中竟然隐隐出现了权臣特有的豪霸之气。
曹操忽然有种久违的毛骨悚然，好像在另外一个世界里，这个年迈的伙夫曾主宰过自己的命运一般。
“何叟，亥时你亲自送碗羊肉过来。”
夜深了，何进端着一盘羊肉进了曹操的卧房。
系统自动读取进度中………………

大将军何进已经完全奔溃。
静养三日后，何进决定直面惨淡的人生。
何进找来曹操，下跪奉上《三国演义》，求曹操善待自己兄弟和汉少帝。
曹操面色惨白，说这书的文字太过怪异实在看不懂。
何进遂不厌其烦地讲解。
曹操听得心惊肉跳，以患痢疾为名连夜离去，当晚派人密信与十常侍。
次日，何太后宣何进入宫。
何进急招曹操：“此必阉奴图我。”
曹操宽慰他应该没事，并告诉他自己会率武士在后边保护。
何进入宫，卒。
曹操趁乱捡走《三国演义》。
……
系统自动读取存档中……

何进已经懒得自己读档了。
何进派人唤来十常侍，大喝：“尔等欲我死，马勒戈壁的来啊！”
十常侍诺诺而出，皆言大将军患了癔症。
十常侍密会何太后与何苗，囚禁何进，何苗暂摄大将军事。
亲妹妹和亲弟弟居然没按时送饭，何进读档。

何进思虑半夜，急忙入宫面圣。
何进与汉少帝苦读《三国演义》一夜，汉少帝面色煞白，毫无主张，何进大为失望，离去。
汉少帝急忙召见十常侍……
何进再一次读档。

何进谁也不相信了。
世上没有一个人是好人。
朝会。
何进下令殿中武士诛杀文武百官。
过瘾之后，何进读档。

何进苦读《三国演义》半月，黑了眼圈，白了黑发，终于豁然开朗，舒了口气。
何进批准刘焉刺交州，刘焉又活动去益州，何进婉拒。
何进卸下大将军之位给了弟弟何苗，决定自己刺益州。因为这是一个最安全的地方，其他地方都太危险了。
何进按照《演义》中刘焉的方法，在益州得以善终，死前告诉孙子何晏： “刘备若来，可奉西川地图印信，走汉中投曹操，切莫与曹爽结交，当结好司马懿，此是上策；开门降刘备，此为中策；诛法正张松，拒刘备，此为下策。为吾一门考量，万不可选下策。”
何晏嗫喏，表示索要神书。
何进用最后一口气怒声道：“孙儿，此妖书害我十三世横死，乃不祥之物，早已焚烧撒于西山青城。孙儿切莫沾此妖书，为祸家门。”
说罢阖然长逝，安静地离开了。

大将军何进率先得到了《三国演义》 。
何进：“…………………………”
何进大口吞吃了《三国演义》，大声嚎叫，抡起佩剑疯狂地在府内乱砍乱杀……
何苗率军赶来，何进读档。

大将军何进率先得到了《三国演义》 。
他几乎对《三国演义》的后事能倒背如流了。
苦思冥想一夜。
次日，派亲信在民间搜寻诸葛亮和庞统。
卧龙凤雏，得之可安天下！
何进领教了妖书的厉害，更是亲生体会了读档的痛苦。
所以他坚信，诸葛亮和庞统不但能改变风向，还能预测天气，更能剪草为马，撒豆成兵。
诸葛亮和庞统找来了，俩不足十岁的小孩。很好，何进坚信，孩子是真诚的。
何进先用很崇敬的礼节向他们行礼，俩小孩哭了。
何进向他们诉说了如今的局势：
内有世族骄横、宦官狡诈，外有悍将拥兵，诸侯不轨。
该怎么办？
俩小孩大哭一夜。
何进差点没忍住抽刀砍了他们，但最后越想越是悲恸。
我何进的遭遇，不跟刀口下的两人相同吗？
哭完一夜，何进派人打发走了他们。
刚打发走，何进细思极恐，又派人追杀了他们。
当晚，何进提兵入宫，亲自陪在汉少帝面前，下令杀十常侍。
十常侍死。
何进进位丞相，软禁王允。
盖勋与皇甫嵩谋废何进，策反袁绍，政变成功，何进再次读档。

到了袁绍。
这个家伙自己一直都不喜欢，他太傲，太装逼。
而且还是是世族出身，不听话。
但是。
不听话的也许就是忠臣。
何进感觉自己脑子有些乱，但还是坚定地叫来袁绍。
二人共读《三国演义》。
袁绍表示内急。
何进大怒：“本初欲托辞离去，加害何某乎！”
袁绍看到何进抽搐而可怕的脸，赶紧长揖：“大将军何苦信此妖言？且不论他事，曹孟德乖张之徒，焉能成大器？”
何进：“操误我三次，不负阿瞒之名，定成大器，你我不如也。”
袁绍很随意地说：“既如此，何不先诛操，再图十常侍？”
何进大怒，猛地抽刀剁死袁绍，多年来的屠宰心得对他杀人大有裨益。
“草泥马的只知道杀曹操，官渡之战还早呢！”
次日，袁隗向董太后何太后哭诉冤情，文武百官无不动容。
洛阳百姓无不言袁绍君子，何进屠夫将军举止疯癫祸国殃民。
何进冷笑，他早已看穿了一切。
第一次读档时，他几乎杀了所有人，没人敢放一颗屁，也就是收了吕布义子才败亡。
这次又有何难！
杀袁氏一族！
董卓丁原起兵清君侧。
何进没有读档，等着城破，拿着《三国演义》，丢给丁原：“好自为之。”
自刎。

丁原得到了《三国演义》……



袁绍率先得到《三国演义》，揣摩字眼读了半天好吃力，丢下了。
前方传来捷报，孙坚斩华雄。
袁绍会心一笑，不过还是很稳妥地找到《三国演义》，烧了。
如故。

董卓率先得到《三国演义》，邀来李儒苦读一夜。
次日，招来王允，求王允将义女许配吕布。
王允表示自己没有义女。
董卓皱眉。
下午，杀曹操。
袁绍发檄文讨伐董卓，董卓照常迁都长安。
吕布与董卓侍妾私通，董卓大怒。
李儒劝董卓息怒，并咐语：“演义。”
董卓细思极恐，夜读《三国演义》至书中自己死前，思虑再三，暗想只要不陷入禅位圈套即可。
次日，王允、士孙瑞、杨瓒等密谋暗杀董卓，吕布应允，董卓死。

曹操得到的话太没意思了，编了好半天都很是无聊，删了……说实话这个太挑人了哈哈。
`

class ScrollState {

  constructor(){
    this.dx=0
    this.dy=0
    this.x=0
    this.y=0
    this.startX=0
    this.startY=0
    this.lastX=0
    this.lastY=0
    this.direction='none'
  }

  next(contentOffset) {
    this.x=contentOffset.x
    this.y=contentOffset.y
    this.dx=this.x-this.startX
    this.dy=this.y-this.startY

    if (this.y - this.lastY > 0) this.direction='down'
    else this.direction='up'

    this.lastX=this.x
    this.lastY=this.y
  }
}

export default class c02 extends Component {

  constructor() {
    super()
    this.state={
      showUp : false ,
      showStatus : true
    }
    this.scrollState = new ScrollState()
  }

  _nextState(state, scrollState) {
    const nextState = {...state}

    if (this.scrollState.y>200) nextState.showUp=true
    else nextState.showUp=false

    if(this.scrollState.y>100) nextState.showStatus=false
    else nextState.showStatus=true

    return nextState
  }

  _scroll=(e)=> {
    this.scrollState.next(e.nativeEvent.contentOffset)
    const nextState = this._nextState(this.state,this.scrollState)

   if(nextState!=this.state) this.setState(nextState)
  }

  _up=()=> {this.refs.scrollView.scrollTo({x:0,y:0,animated:true})}

  render() {

    const{showUp,showStatus} = this.state

    return <View style={{flex:1}}>
      <StatusBar hidden={!showStatus}/>
      <ScrollView
        style={{flex:1,padding:10}}
        scrollEventThrottle={16}
        ref='scrollView'
        onScroll={this._scroll}
      >
        <View style={{margin:10}}>
          <Text style={styles.title1}>三国众人如果看到三国演义会有什么反应？</Text>
          <Text style={styles.title2}>——知乎用户 关毛 的回答</Text>
        </View>
        {contents.split('\n').map( (e,i)=> <Text key={i} style={styles.text}>{e}</Text> )}
      </ScrollView>

      {showUp ?
        <TouchableWithoutFeedback onPress={this._up}>
          <View style={styles.up}>
            <Image source={require('week3/source/2.png')} style={{width: 30, height: 30}}></Image>
          </View>
        </TouchableWithoutFeedback>
        : null}

    </View>
  }
}

const styles = StyleSheet.create({
  text : {
    fontSize:15
  },

  title1 : {
    fontSize:21
  },

  title2 : {
    fontSize:15,
    marginBottom:10,
    textAlign:'right'
  },

  up : {
    position:'absolute',
    right:10,bottom:30,
    width:40,height:40,
    backgroundColor:'#fff',
    borderRadius:20,
    borderWidth:1,
    borderColor:'#eee',
    alignItems:'center',
    justifyContent:'center'
  }

})