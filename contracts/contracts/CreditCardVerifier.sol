// SPDX-License-Identifier: GPL-3.0
/*
    Copyright 2021 0KIMS association.

    This file is generated with [snarkJS](https://github.com/iden3/snarkjs).

    snarkJS is a free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    snarkJS is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
    License for more details.

    You should have received a copy of the GNU General Public License
    along with snarkJS. If not, see <https://www.gnu.org/licenses/>.
*/

pragma solidity >=0.7.0 <0.9.0;

contract CreditCardVerifier {
    // Scalar field size
    uint256 constant r    = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    // Base field size
    uint256 constant q   = 21888242871839275222246405745257275088696311157297823662689037894645226208583;

    // Verification Key data
    uint256 constant alphax  = 20491192805390485299153009773594534940189261866228447918068658471970481763042;
    uint256 constant alphay  = 9383485363053290200918347156157836566562967994039712273449902621266178545958;
    uint256 constant betax1  = 4252822878758300859123897981450591353533073413197771768651442665752259397132;
    uint256 constant betax2  = 6375614351688725206403948262868962793625744043794305715222011528459656738731;
    uint256 constant betay1  = 21847035105528745403288232691147584728191162732299865338377159692350059136679;
    uint256 constant betay2  = 10505242626370262277552901082094356697409835680220590971873171140371331206856;
    uint256 constant gammax1 = 11559732032986387107991004021392285783925812861821192530917403151452391805634;
    uint256 constant gammax2 = 10857046999023057135944570762232829481370756359578518086990519993285655852781;
    uint256 constant gammay1 = 4082367875863433681332203403145435568316851327593401208105741076214120093531;
    uint256 constant gammay2 = 8495653923123431417604973247489272438418190587263600148770280649306958101930;
    uint256 constant deltax1 = 5601541189748670421236964719277030186758997266939446053096667107741260031447;
    uint256 constant deltax2 = 3919175052683746493725706584556983667223319859559788232617928373079514422486;
    uint256 constant deltay1 = 18607346116099270692279787640344106434266172542014318119421101467764393161807;
    uint256 constant deltay2 = 7698990266472942093387064657980173355764109650497804863897381470364030691036;

    
    uint256 constant IC0x = 18084539256598535413624689142144197679498815847869011133786420061508626049525;
    uint256 constant IC0y = 5084366834809675538857954180910912049189686794507900586531134551735335251490;
    
    uint256 constant IC1x = 5347908951803983942354390598014838112737810596744195385922828306425058989194;
    uint256 constant IC1y = 14891865185780465875504688981968131240792540238481047224748583364930203480490;
    
    uint256 constant IC2x = 15452442321582889720544537966077075399663135389389344565955281691365925601313;
    uint256 constant IC2y = 4725069612984795602877840465650400341024625441231663516241668875406293898795;
    
    uint256 constant IC3x = 10028219372254496429201528343198901016486182648137137070786057435840277866425;
    uint256 constant IC3y = 4015750390640397656663324735848723058715173314643270607293481040793948873052;
    
    uint256 constant IC4x = 2435615921009275371034284389728646375787866020347978040243137049068826209676;
    uint256 constant IC4y = 20895078087101581824760440999737148472228024091787833667228674839492513836227;
    
    uint256 constant IC5x = 2319240843407255180063707948363319499809171873954273400582241058653525069219;
    uint256 constant IC5y = 2711974725437812733254058773247550034039475272134399619072103884238173095578;
    
    uint256 constant IC6x = 9381054404047658955757079304326316671321429937843840713288553736980990914719;
    uint256 constant IC6y = 21549334002065828894795664455911749849361945690385988401470806327217114873475;
    
    uint256 constant IC7x = 12145297973564191817083652756489707819947155697093372426647146069288319813474;
    uint256 constant IC7y = 18600821381962734790044836401244980095485747451151098917305547186245798008826;
    
    uint256 constant IC8x = 11470686622965052184342667418199042024770889662530580148418467560396356864404;
    uint256 constant IC8y = 480791276346438502044986036394483838023452354128292678995440955767217413340;
    
    uint256 constant IC9x = 2489578740796723753890808039868193538358837447317692667363398280755707116539;
    uint256 constant IC9y = 6490422471752754891947530522613836885756730591146207632586904774758018642556;
    
    uint256 constant IC10x = 10287234759828586093922615208837528563926250052791232945153849949047559023501;
    uint256 constant IC10y = 9061745065713745829857654813356908549714615808556464703013909311292772833942;
    
    uint256 constant IC11x = 18253998773095692581598323623701331069376326401887546325630530407116358513279;
    uint256 constant IC11y = 2823556013868431026753587154176564822953204929948083050774605535427533607874;
    
    uint256 constant IC12x = 746138050464961518770440660224035477521143361372409357195280813840405419301;
    uint256 constant IC12y = 19048561415014145584880327462454741671654244866538509838330772938529603959870;
    
    uint256 constant IC13x = 7761146632747305165044368982466230136249131097596404424055199133279879056229;
    uint256 constant IC13y = 1411464384017907305380660302628402674296100700261257311646911321385739519450;
    
    uint256 constant IC14x = 1238164470605051908740440733551546160612227255876133993227946943181107684915;
    uint256 constant IC14y = 20899192895658508452687509196487021291328796282793898790635658559703100429066;
    
    uint256 constant IC15x = 8021178011469154894392162914709000640328466193431339540799161176814575222629;
    uint256 constant IC15y = 695451826217839528604788793931949380751338485019878982718954159730832961606;
    
    uint256 constant IC16x = 19215781601781350039789279614051010455002410945930431131380314507480311561095;
    uint256 constant IC16y = 1834301114325458026368392586605268081333692363725847004503320736732840532917;
    
    uint256 constant IC17x = 8252848654892960814658008644740411007411362799104694584119270668526195836054;
    uint256 constant IC17y = 10970073409653593215646344203031649382240933074379030083616927308283394100723;
    
    uint256 constant IC18x = 7680536109067062757019431564051317023749641185266098985840771885363953385580;
    uint256 constant IC18y = 14910396940992911223128210693926299746316332716859234692067931616619165473268;
    
    uint256 constant IC19x = 14173044636687609476573641941597300118401215986896717692795709149123718285568;
    uint256 constant IC19y = 1922474611268643667537327057003645911053045627016521552035259770005613323313;
    
    uint256 constant IC20x = 1996135899179701998849204362586113704358586704140676819378821283247005600759;
    uint256 constant IC20y = 10296501565232840644316996542152733705166033647270532883378898176477521120450;
    
    uint256 constant IC21x = 18820003042442472105155528905389831264749943963169150471457173576624395293851;
    uint256 constant IC21y = 20434004226303812853647714232592694479872226396573522829647685240000062513515;
    
    uint256 constant IC22x = 12834591187875670272106834831534639216008050627759625490772095231725921234152;
    uint256 constant IC22y = 12731351087158855736883815708107530066388709182888620460125760793292034676437;
    
    uint256 constant IC23x = 19161153444635755183351541584989739875293243936157099798999688645270499810986;
    uint256 constant IC23y = 6533577079953297391900873115543939187951195921885804285325582518287103247499;
    
    uint256 constant IC24x = 11300894354726378313617137657486673474777311927922973720731857135002692592842;
    uint256 constant IC24y = 9047004643677646231800415982426599876493414780032597043127919877432162086403;
    
    uint256 constant IC25x = 773774890673977788334097382413245603243681763657996840057357129121087766992;
    uint256 constant IC25y = 5663378836381146091255858456884645560406576088477917611092574276964887317039;
    
    uint256 constant IC26x = 18842359010132824790384234168691548924234605624563209266934309132599130460380;
    uint256 constant IC26y = 15314133544275734567901453327030784637649012654684085603328604273869227759798;
    
    uint256 constant IC27x = 5596944972850668478178551460724389413977294850292130862508129925252300303772;
    uint256 constant IC27y = 10209792228383025224397180991515638852648380250754906970748471464770193005736;
    
    uint256 constant IC28x = 11119460435148711096205964171452142694680702386030578330698560201544696689075;
    uint256 constant IC28y = 19799209798181386349539478536328133217096172052776672960783842593032222179394;
    
    uint256 constant IC29x = 6144535138265993268794975373429944020178582282819760312310552796162276933160;
    uint256 constant IC29y = 4735892641431420267373169880936645494346823181169599008976567308901677512029;
    
    uint256 constant IC30x = 8996388483659092761837020601055612486678719509488601148224765393323147601817;
    uint256 constant IC30y = 17256566573455520468537713146288386919005980659055216425748451518838894057859;
    
    uint256 constant IC31x = 8295508062934274617312327519622198895531657546387357255149431302202386322173;
    uint256 constant IC31y = 19948280289964803059733328506800515152073454504248490370839415173733700961503;
    
    uint256 constant IC32x = 3095234341804943666870138370297649395615389495970637218910109103989054570853;
    uint256 constant IC32y = 18863804511388372913374106006571515748105088565024438289711617633433089068230;
    
    uint256 constant IC33x = 16775091969374020486080258827764313253529192708351301278523334265035896303634;
    uint256 constant IC33y = 7065257271277543823956540650486502721469848131838677875053639043218105573461;
    
    uint256 constant IC34x = 13608645892225138825569960473321645480792999103245619676334949346194576265309;
    uint256 constant IC34y = 13559922505092887553316856238078659326620111803929355028915120693169211910013;
    
    uint256 constant IC35x = 14118502258219064246681397395418647090445589623072548555898003126481576880415;
    uint256 constant IC35y = 14777972275371001436685137109740887193916754302962587712255097041701106015954;
    
    uint256 constant IC36x = 1367119290611819635186723248313598359208595889355214800501897414188131650813;
    uint256 constant IC36y = 20196907456974038855323251648239204831968294952905807690573889269035042452957;
    
    uint256 constant IC37x = 5150944467183971593798383297834561987573046015220805123229815729268853806233;
    uint256 constant IC37y = 13442036653479961602663740593151321854227216546690729611273342235080852983138;
    
    uint256 constant IC38x = 19639592376542619611916783359961867575551881850614244286396574455373215903061;
    uint256 constant IC38y = 4019725165125477327156200594269205374656211224659260817629680929542985892530;
    
    uint256 constant IC39x = 7238991460786089717760280014659161649430833773882473371151415472087812060806;
    uint256 constant IC39y = 7847312684315194817694403059083170513727991163634947666879806597441160008898;
    
    uint256 constant IC40x = 20220698623787415880416957936061287678907065454026665490111635202947328267195;
    uint256 constant IC40y = 12210998055143680398712839093946841818912285911072417385328519040686103146053;
    
    uint256 constant IC41x = 10446536038928056672429640751801146609444073732927520339077894142315722779290;
    uint256 constant IC41y = 3704902981257485696735068422710449606372178503690293658921404562203973346092;
    
    uint256 constant IC42x = 1991282762995299165804476374985459894998776534387673377858790044685739674018;
    uint256 constant IC42y = 19169565479229255517311129525525404932294081915630940245891467535790243439963;
    
    uint256 constant IC43x = 12318401331956222933184424375601115080583362571513022981910377357200967698399;
    uint256 constant IC43y = 9518092348083607075005320407761616698098201873314486291298334475232150206407;
    
    uint256 constant IC44x = 10423772265709707758611539219398620005200915886440460296737738074051003038625;
    uint256 constant IC44y = 16200887817201596162632731379010477525073805639283021922535085450965254896711;
    
    uint256 constant IC45x = 2871611034551226667455735951157600409939067325756519309688872379142298103683;
    uint256 constant IC45y = 7186513815318984713288331794542468693203068764969374758566716149307339035808;
    
    uint256 constant IC46x = 12714388208871190451088381650224103203066410177742210530008371143708079647355;
    uint256 constant IC46y = 5075091078761333851649313035800861590065844992589393613126882116950515923324;
    
    uint256 constant IC47x = 6381637903839154134467552000825099054174198293136993194846758491204845979549;
    uint256 constant IC47y = 9795308549803712155648936191270539019084673270241584585613443765309850876276;
    
    uint256 constant IC48x = 12416525227517646756128162080611523167311083969357517761376875607931526675674;
    uint256 constant IC48y = 12678747282456829401973653049049639428752201921154399891284284428703978600865;
    
    uint256 constant IC49x = 2212821760505316287100469086244848189692631690587444059973875816863010157236;
    uint256 constant IC49y = 6966558541452204799414050184366990242263337588768859739178312876335818785299;
    
    uint256 constant IC50x = 1211910274574508001459655143057490397223836715931231603237644401944387408991;
    uint256 constant IC50y = 10556618614230802856039324854365271540331655096111671262645285705045307933247;
    
    uint256 constant IC51x = 6529083395222508680205975615997776579724092932416461758100063409723154974492;
    uint256 constant IC51y = 7435040396760370589883959872667802242175363131104275860426322430668324071553;
    
    uint256 constant IC52x = 20382697209090879390107889652607932391920601153463359595875911529278546933679;
    uint256 constant IC52y = 10783258229213598601631568025293855006751613514349263378972978350116493308283;
    
    uint256 constant IC53x = 4236804196166403532837069871732906508410033197122808108125131619420099360625;
    uint256 constant IC53y = 13591500130494719614079647663517338259667932010706700658971684076901494695875;
    
    uint256 constant IC54x = 12312605897627451971878872839117310827353227057464763985659762477409728933807;
    uint256 constant IC54y = 14165186904058411798102929994021698636272199084519409805831809893675564866645;
    
    uint256 constant IC55x = 13488610341167690391970502657927951899855914605172689339806458865611445516693;
    uint256 constant IC55y = 8205043738281064186529926320432501565656956100582280422959452658475059850424;
    
    uint256 constant IC56x = 15755666194816482670199144762592248753037327167673620957186096363929494464366;
    uint256 constant IC56y = 11763057898872356204559287202119100052932900281518754705626020888168091628324;
    
    uint256 constant IC57x = 11746808164420653040878765111529353887568841719686553239903211920288917914624;
    uint256 constant IC57y = 3788972367442236000610397290183623443209411949826167737144050546150039223867;
    
    uint256 constant IC58x = 1979527434795961040345455834627171123552014550314644069024956096389074530831;
    uint256 constant IC58y = 20821948060909685797665007243004191709985633859364486077833440391462049203483;
    
    uint256 constant IC59x = 13698410696704005983309842503509765798934067295308238016075954642739118000572;
    uint256 constant IC59y = 18506906488322331931527689493448551816734066535227651861928173096407285335222;
    
    uint256 constant IC60x = 9442176961347175030431122457241231595318325349304581307293816333560434851494;
    uint256 constant IC60y = 14975400322396139220621212575769223667416474573814099354920990068687149295838;
    
    uint256 constant IC61x = 13437393714879929487594174628453621775183586080679557841363544309697318709722;
    uint256 constant IC61y = 8148089473307458028253262758146716211988719334334449039832698632634182559186;
    
    uint256 constant IC62x = 6162331540464318804939052379540048126505729051486416397430147633680692674495;
    uint256 constant IC62y = 16823644007881546949137665244380328978328525925203641115193965163206118291633;
    
    uint256 constant IC63x = 18433481746663287453050271577914429154162537538667008481540143442897563866420;
    uint256 constant IC63y = 18389267727358833609554540001447999474890316146339923609859737946848219655011;
    
    uint256 constant IC64x = 11429708459368304122942440535440225022959660245233784276039508320701511377471;
    uint256 constant IC64y = 6410773621199636747301094979933085053670257765227899492593148353439086681271;
    
 
    // Memory data
    uint16 constant pVk = 0;
    uint16 constant pPairing = 128;

    uint16 constant pLastMem = 896;

    function verifyProof(uint[2] calldata _pA, uint[2][2] calldata _pB, uint[2] calldata _pC, uint[64] calldata _pubSignals) public view returns (bool) {
        assembly {
            function checkField(v) {
                if iszero(lt(v, q)) {
                    mstore(0, 0)
                    return(0, 0x20)
                }
            }
            
            // G1 function to multiply a G1 value(x,y) to value in an address
            function g1_mulAccC(pR, x, y, s) {
                let success
                let mIn := mload(0x40)
                mstore(mIn, x)
                mstore(add(mIn, 32), y)
                mstore(add(mIn, 64), s)

                success := staticcall(sub(gas(), 2000), 7, mIn, 96, mIn, 64)

                if iszero(success) {
                    mstore(0, 0)
                    return(0, 0x20)
                }

                mstore(add(mIn, 64), mload(pR))
                mstore(add(mIn, 96), mload(add(pR, 32)))

                success := staticcall(sub(gas(), 2000), 6, mIn, 128, pR, 64)

                if iszero(success) {
                    mstore(0, 0)
                    return(0, 0x20)
                }
            }

            function checkPairing(pA, pB, pC, pubSignals, pMem) -> isOk {
                let _pPairing := add(pMem, pPairing)
                let _pVk := add(pMem, pVk)

                mstore(_pVk, IC0x)
                mstore(add(_pVk, 32), IC0y)

                // Compute the linear combination vk_x
                
                g1_mulAccC(_pVk, IC1x, IC1y, calldataload(add(pubSignals, 0)))
                
                g1_mulAccC(_pVk, IC2x, IC2y, calldataload(add(pubSignals, 32)))
                
                g1_mulAccC(_pVk, IC3x, IC3y, calldataload(add(pubSignals, 64)))
                
                g1_mulAccC(_pVk, IC4x, IC4y, calldataload(add(pubSignals, 96)))
                
                g1_mulAccC(_pVk, IC5x, IC5y, calldataload(add(pubSignals, 128)))
                
                g1_mulAccC(_pVk, IC6x, IC6y, calldataload(add(pubSignals, 160)))
                
                g1_mulAccC(_pVk, IC7x, IC7y, calldataload(add(pubSignals, 192)))
                
                g1_mulAccC(_pVk, IC8x, IC8y, calldataload(add(pubSignals, 224)))
                
                g1_mulAccC(_pVk, IC9x, IC9y, calldataload(add(pubSignals, 256)))
                
                g1_mulAccC(_pVk, IC10x, IC10y, calldataload(add(pubSignals, 288)))
                
                g1_mulAccC(_pVk, IC11x, IC11y, calldataload(add(pubSignals, 320)))
                
                g1_mulAccC(_pVk, IC12x, IC12y, calldataload(add(pubSignals, 352)))
                
                g1_mulAccC(_pVk, IC13x, IC13y, calldataload(add(pubSignals, 384)))
                
                g1_mulAccC(_pVk, IC14x, IC14y, calldataload(add(pubSignals, 416)))
                
                g1_mulAccC(_pVk, IC15x, IC15y, calldataload(add(pubSignals, 448)))
                
                g1_mulAccC(_pVk, IC16x, IC16y, calldataload(add(pubSignals, 480)))
                
                g1_mulAccC(_pVk, IC17x, IC17y, calldataload(add(pubSignals, 512)))
                
                g1_mulAccC(_pVk, IC18x, IC18y, calldataload(add(pubSignals, 544)))
                
                g1_mulAccC(_pVk, IC19x, IC19y, calldataload(add(pubSignals, 576)))
                
                g1_mulAccC(_pVk, IC20x, IC20y, calldataload(add(pubSignals, 608)))
                
                g1_mulAccC(_pVk, IC21x, IC21y, calldataload(add(pubSignals, 640)))
                
                g1_mulAccC(_pVk, IC22x, IC22y, calldataload(add(pubSignals, 672)))
                
                g1_mulAccC(_pVk, IC23x, IC23y, calldataload(add(pubSignals, 704)))
                
                g1_mulAccC(_pVk, IC24x, IC24y, calldataload(add(pubSignals, 736)))
                
                g1_mulAccC(_pVk, IC25x, IC25y, calldataload(add(pubSignals, 768)))
                
                g1_mulAccC(_pVk, IC26x, IC26y, calldataload(add(pubSignals, 800)))
                
                g1_mulAccC(_pVk, IC27x, IC27y, calldataload(add(pubSignals, 832)))
                
                g1_mulAccC(_pVk, IC28x, IC28y, calldataload(add(pubSignals, 864)))
                
                g1_mulAccC(_pVk, IC29x, IC29y, calldataload(add(pubSignals, 896)))
                
                g1_mulAccC(_pVk, IC30x, IC30y, calldataload(add(pubSignals, 928)))
                
                g1_mulAccC(_pVk, IC31x, IC31y, calldataload(add(pubSignals, 960)))
                
                g1_mulAccC(_pVk, IC32x, IC32y, calldataload(add(pubSignals, 992)))
                
                g1_mulAccC(_pVk, IC33x, IC33y, calldataload(add(pubSignals, 1024)))
                
                g1_mulAccC(_pVk, IC34x, IC34y, calldataload(add(pubSignals, 1056)))
                
                g1_mulAccC(_pVk, IC35x, IC35y, calldataload(add(pubSignals, 1088)))
                
                g1_mulAccC(_pVk, IC36x, IC36y, calldataload(add(pubSignals, 1120)))
                
                g1_mulAccC(_pVk, IC37x, IC37y, calldataload(add(pubSignals, 1152)))
                
                g1_mulAccC(_pVk, IC38x, IC38y, calldataload(add(pubSignals, 1184)))
                
                g1_mulAccC(_pVk, IC39x, IC39y, calldataload(add(pubSignals, 1216)))
                
                g1_mulAccC(_pVk, IC40x, IC40y, calldataload(add(pubSignals, 1248)))
                
                g1_mulAccC(_pVk, IC41x, IC41y, calldataload(add(pubSignals, 1280)))
                
                g1_mulAccC(_pVk, IC42x, IC42y, calldataload(add(pubSignals, 1312)))
                
                g1_mulAccC(_pVk, IC43x, IC43y, calldataload(add(pubSignals, 1344)))
                
                g1_mulAccC(_pVk, IC44x, IC44y, calldataload(add(pubSignals, 1376)))
                
                g1_mulAccC(_pVk, IC45x, IC45y, calldataload(add(pubSignals, 1408)))
                
                g1_mulAccC(_pVk, IC46x, IC46y, calldataload(add(pubSignals, 1440)))
                
                g1_mulAccC(_pVk, IC47x, IC47y, calldataload(add(pubSignals, 1472)))
                
                g1_mulAccC(_pVk, IC48x, IC48y, calldataload(add(pubSignals, 1504)))
                
                g1_mulAccC(_pVk, IC49x, IC49y, calldataload(add(pubSignals, 1536)))
                
                g1_mulAccC(_pVk, IC50x, IC50y, calldataload(add(pubSignals, 1568)))
                
                g1_mulAccC(_pVk, IC51x, IC51y, calldataload(add(pubSignals, 1600)))
                
                g1_mulAccC(_pVk, IC52x, IC52y, calldataload(add(pubSignals, 1632)))
                
                g1_mulAccC(_pVk, IC53x, IC53y, calldataload(add(pubSignals, 1664)))
                
                g1_mulAccC(_pVk, IC54x, IC54y, calldataload(add(pubSignals, 1696)))
                
                g1_mulAccC(_pVk, IC55x, IC55y, calldataload(add(pubSignals, 1728)))
                
                g1_mulAccC(_pVk, IC56x, IC56y, calldataload(add(pubSignals, 1760)))
                
                g1_mulAccC(_pVk, IC57x, IC57y, calldataload(add(pubSignals, 1792)))
                
                g1_mulAccC(_pVk, IC58x, IC58y, calldataload(add(pubSignals, 1824)))
                
                g1_mulAccC(_pVk, IC59x, IC59y, calldataload(add(pubSignals, 1856)))
                
                g1_mulAccC(_pVk, IC60x, IC60y, calldataload(add(pubSignals, 1888)))
                
                g1_mulAccC(_pVk, IC61x, IC61y, calldataload(add(pubSignals, 1920)))
                
                g1_mulAccC(_pVk, IC62x, IC62y, calldataload(add(pubSignals, 1952)))
                
                g1_mulAccC(_pVk, IC63x, IC63y, calldataload(add(pubSignals, 1984)))
                
                g1_mulAccC(_pVk, IC64x, IC64y, calldataload(add(pubSignals, 2016)))
                

                // -A
                mstore(_pPairing, calldataload(pA))
                mstore(add(_pPairing, 32), mod(sub(q, calldataload(add(pA, 32))), q))

                // B
                mstore(add(_pPairing, 64), calldataload(pB))
                mstore(add(_pPairing, 96), calldataload(add(pB, 32)))
                mstore(add(_pPairing, 128), calldataload(add(pB, 64)))
                mstore(add(_pPairing, 160), calldataload(add(pB, 96)))

                // alpha1
                mstore(add(_pPairing, 192), alphax)
                mstore(add(_pPairing, 224), alphay)

                // beta2
                mstore(add(_pPairing, 256), betax1)
                mstore(add(_pPairing, 288), betax2)
                mstore(add(_pPairing, 320), betay1)
                mstore(add(_pPairing, 352), betay2)

                // vk_x
                mstore(add(_pPairing, 384), mload(add(pMem, pVk)))
                mstore(add(_pPairing, 416), mload(add(pMem, add(pVk, 32))))


                // gamma2
                mstore(add(_pPairing, 448), gammax1)
                mstore(add(_pPairing, 480), gammax2)
                mstore(add(_pPairing, 512), gammay1)
                mstore(add(_pPairing, 544), gammay2)

                // C
                mstore(add(_pPairing, 576), calldataload(pC))
                mstore(add(_pPairing, 608), calldataload(add(pC, 32)))

                // delta2
                mstore(add(_pPairing, 640), deltax1)
                mstore(add(_pPairing, 672), deltax2)
                mstore(add(_pPairing, 704), deltay1)
                mstore(add(_pPairing, 736), deltay2)


                let success := staticcall(sub(gas(), 2000), 8, _pPairing, 768, _pPairing, 0x20)

                isOk := and(success, mload(_pPairing))
            }

            let pMem := mload(0x40)
            mstore(0x40, add(pMem, pLastMem))

            // Validate that all evaluations ∈ F
            
            checkField(calldataload(add(_pubSignals, 0)))
            
            checkField(calldataload(add(_pubSignals, 32)))
            
            checkField(calldataload(add(_pubSignals, 64)))
            
            checkField(calldataload(add(_pubSignals, 96)))
            
            checkField(calldataload(add(_pubSignals, 128)))
            
            checkField(calldataload(add(_pubSignals, 160)))
            
            checkField(calldataload(add(_pubSignals, 192)))
            
            checkField(calldataload(add(_pubSignals, 224)))
            
            checkField(calldataload(add(_pubSignals, 256)))
            
            checkField(calldataload(add(_pubSignals, 288)))
            
            checkField(calldataload(add(_pubSignals, 320)))
            
            checkField(calldataload(add(_pubSignals, 352)))
            
            checkField(calldataload(add(_pubSignals, 384)))
            
            checkField(calldataload(add(_pubSignals, 416)))
            
            checkField(calldataload(add(_pubSignals, 448)))
            
            checkField(calldataload(add(_pubSignals, 480)))
            
            checkField(calldataload(add(_pubSignals, 512)))
            
            checkField(calldataload(add(_pubSignals, 544)))
            
            checkField(calldataload(add(_pubSignals, 576)))
            
            checkField(calldataload(add(_pubSignals, 608)))
            
            checkField(calldataload(add(_pubSignals, 640)))
            
            checkField(calldataload(add(_pubSignals, 672)))
            
            checkField(calldataload(add(_pubSignals, 704)))
            
            checkField(calldataload(add(_pubSignals, 736)))
            
            checkField(calldataload(add(_pubSignals, 768)))
            
            checkField(calldataload(add(_pubSignals, 800)))
            
            checkField(calldataload(add(_pubSignals, 832)))
            
            checkField(calldataload(add(_pubSignals, 864)))
            
            checkField(calldataload(add(_pubSignals, 896)))
            
            checkField(calldataload(add(_pubSignals, 928)))
            
            checkField(calldataload(add(_pubSignals, 960)))
            
            checkField(calldataload(add(_pubSignals, 992)))
            
            checkField(calldataload(add(_pubSignals, 1024)))
            
            checkField(calldataload(add(_pubSignals, 1056)))
            
            checkField(calldataload(add(_pubSignals, 1088)))
            
            checkField(calldataload(add(_pubSignals, 1120)))
            
            checkField(calldataload(add(_pubSignals, 1152)))
            
            checkField(calldataload(add(_pubSignals, 1184)))
            
            checkField(calldataload(add(_pubSignals, 1216)))
            
            checkField(calldataload(add(_pubSignals, 1248)))
            
            checkField(calldataload(add(_pubSignals, 1280)))
            
            checkField(calldataload(add(_pubSignals, 1312)))
            
            checkField(calldataload(add(_pubSignals, 1344)))
            
            checkField(calldataload(add(_pubSignals, 1376)))
            
            checkField(calldataload(add(_pubSignals, 1408)))
            
            checkField(calldataload(add(_pubSignals, 1440)))
            
            checkField(calldataload(add(_pubSignals, 1472)))
            
            checkField(calldataload(add(_pubSignals, 1504)))
            
            checkField(calldataload(add(_pubSignals, 1536)))
            
            checkField(calldataload(add(_pubSignals, 1568)))
            
            checkField(calldataload(add(_pubSignals, 1600)))
            
            checkField(calldataload(add(_pubSignals, 1632)))
            
            checkField(calldataload(add(_pubSignals, 1664)))
            
            checkField(calldataload(add(_pubSignals, 1696)))
            
            checkField(calldataload(add(_pubSignals, 1728)))
            
            checkField(calldataload(add(_pubSignals, 1760)))
            
            checkField(calldataload(add(_pubSignals, 1792)))
            
            checkField(calldataload(add(_pubSignals, 1824)))
            
            checkField(calldataload(add(_pubSignals, 1856)))
            
            checkField(calldataload(add(_pubSignals, 1888)))
            
            checkField(calldataload(add(_pubSignals, 1920)))
            
            checkField(calldataload(add(_pubSignals, 1952)))
            
            checkField(calldataload(add(_pubSignals, 1984)))
            
            checkField(calldataload(add(_pubSignals, 2016)))
            
            checkField(calldataload(add(_pubSignals, 2048)))
            

            // Validate all evaluations
            let isValid := checkPairing(_pA, _pB, _pC, _pubSignals, pMem)

            mstore(0, isValid)
             return(0, 0x20)
         }
     }
 }
