const fs = require("fs");

export const wearablesSvgs = [
  bodyWearable("0_Void"),
  wearable("1_CamoHat"),
  wearable("2_CamoPants"), // body but doesn't have sleeves
  wearable("3_MK2Grenade"),
  wearable("4_SnowCamoHat"),
  wearable("5_SnowCamoPants"), // body but no sleeves
  wearable("6_M67Grenade"),
  wearable("7_MarineCap"),
  bodyWearable("8_MarineJacket"), // bodyWearable("8_MarineJacket"),
  wearable("9_WalkieTalkie"),
  wearable("10_LinkWhiteHat"),
  bodyWearable("11_MessDress"), // bodyWearable("11_MessDress"),
  wearable("12_LinkBubbly"),
  wearable("13_SergeyBeard"),
  "14_SergeyEyes", // no eyes for  side
  bodyWearable("15_RedPlaid"), // bodyWearable("15_RedPlaid"),
  bodyWearable("16_BluePlaid"), //  bodyWearable("16_BluePlaid"),
  wearable("17_LinkCube"),
  wearable("18_AaveHeroMask"),
  bodyWearable("19_AaveHeroShirt"), // bodyWearable("19_AaveHeroShirt"),
  wearable("20_AavePlush"),
  wearable("21_CaptainAaveMask"),
  bodyWearable("22_CaptainAaveSuit"), // bodyWearable("22_CaptainAaveSuit"),
  wearable("23_CaptainAaveShield"),
  wearable("24_ThaaveHelmet"),
  bodyWearable("25_ThaaveSuit"), // bodyWearable("25_ThaaveSuit"),
  wearable("26_ThaaveHammer"),
  wearable("27_MarcHair"),
  bodyWearable("28_MarcOutfit"), // bodyWearable("28_MarcOutfit"),
  wearable("29_REKTSign"),
  wearable("30_JordanHair"),
  bodyWearable("31_JordanSuit"), // bodyWearable("31_JordanSuit"),
  wearable("32_AaveFlag"),
  wearable("33_StaniHair"),
  wearable("34_StaniVest"), // bodyWearable("34_StaniVest"),
  wearable("35_AaveBoat"),
  wearable("36_ETHMaxiGlasses"),
  bodyWearable("37_ETHTShirt"),
  wearable("38_32ETHCoin"), //may need ETHCoinRight
  wearable("39_FoxyMask"),
  wearable("40_FoxyTail"), // body but no sleeves
  wearable("41_TrezorWallet"),
  wearable("42_NogaraEagleMask"),
  bodyWearable("43_NogaraEagleArmor"),
  wearable("44_DAOEgg"),
  wearable("45_ApeMask"),
  bodyWearable("46_HalfRektShirt"),
  wearable("47_WaifuPillow"),
  wearable("48_XibotMohawk"),
  wearable("49_CoderdanShades"),
  bodyWearable("50_GldnXrossRobe"),
  wearable("51_MudgenDiamond"),
  wearable("52_GalaxyBrain"),
  "53_AllSeeingEyes",
  bodyWearable("54_LlamacornShirt"),
  wearable("55_AagentHeadset"),
  bodyWearable("56_AagentShirt"),
  wearable("57_AagentShades"),
  wearable("58_AagentPistol"),
  wearable("59_AagentFedoraHat"),
  wearable("60_WizardHat"),
  wearable("61_WizardHatLegendary"),
  wearable("62_WizardHatMythical"),
  wearable("63_WizardHatGodlike"),
  wearable("64_WizardStaff"),
  wearable("65_WizardStaffLegendary"),
  wearable("66_FutureWizardVisor"),
  wearable("67_FarmerStrawHat"),
  wearable("68_FarmerJeans"), // Body but no sleeves
  wearable("69_FarmerPitchfork"),
  wearable("70_FarmerHandsaw"),
  wearable("71_SantagotchiHat"),
  wearable("72_JaayHairpiece"),
  wearable("73_JaayGlasses"),
  bodyWearable("74_JaayHaoSuit"),
  wearable("75_OKexSign"),
  wearable("76_BigGHSTToken"),
  wearable("77_BitcoinBeanie"),
  wearable("78_SkaterJeans"), // Body but no sleeves
  wearable("79_Skateboard"),
  wearable("80_SushiHeadband"),
  wearable("81_SushiRobe"), // Body but not sleeves
  wearable("82_SushiRoll"),
  wearable("83_SushiKnife"),
  wearable("84_GentlemanHat"),
  bodyWearable("85_GentlemanSuit"),
  "86_GentlemanMonocle",
  wearable("87_MinerHelmet"),
  wearable("88_MinerJeans"), // Body but no sleeves
  wearable("89_MinerPickaxe"),
  wearable("90_PajamaHat"),
  bodyWearable("91_PajamaPants"),
  wearable("92_BedtimeMilk"),
  wearable("93_FluffyBlanket"),
  wearable("94_RunnerSweatband"),
  wearable("95_RunnerShorts"), // Body but no sleeves
  wearable("96_WaterBottle"),
  wearable("97_PillboxHat"),
  wearable("98_LadySkirt"), // Body but no sleeves
  wearable("99_LadyParasol"),
  wearable("100_LadyClutch"),
  wearable("101_WitchHat"),
  bodyWearable("102_WitchCape"),
  wearable("103_WitchWand"),
  wearable("104_PortalMageHelmet"),
  bodyWearable("105_PortalMageArmor"),
  wearable("106_PortalMageAxe"),
  wearable("107_PortalMageBlackAxe"),
  wearable("108_RastaDreds"),
  bodyWearable("109_RastaShirt"),
  wearable("110_JamaicanFlag"),
  wearable("111_HazmatHood"),
  bodyWearable("112_HazmatSuit"),
  wearable("113_UraniumRod"),
  bodyWearable("114_RedHawaiianShirt"),
  bodyWearable("115_BlueHawaiianShirt"),
  wearable("116_Coconut"),
  wearable("117_DealWithItShades"),
  wearable("118_WaterJug"),
  wearable("119_BabyBottle"),
  wearable("120_Martini"),
  wearable("121_WineBottle"),
  wearable("122_Milkshake"),
  wearable("123_AppleJuice"),
  wearable("124_BeerHelmet"),
  bodyWearable("125_TrackSuit"),
  wearable("126_KinshipPotion"),
  wearable("127_GreaterKinshipPotion"),
  wearable("128_XPPotion"),
  wearable("129_GreaterXPPotion"),
  wearable("130_Fireball"),
  wearable("131_DragonHorns"),
  wearable("132_DragonWings"),
  wearable("133_PointyHorns"), // Body wearable but not sleeves
  wearable("134_L2Sign"),
  bodyWearable("135_PolygonShirt"),
  wearable("136_PolygonCap"),
  wearable("137_VoteSign"),
  bodyWearable("138_SnapshotShirt"),
  wearable("139_SnapshotHat"),
  wearable("140_ElfEars"),
  wearable("141_GemstoneRing"),
  wearable("142_PrincessTiara"),
  wearable("143_GoldNecklace"),
  wearable("144_PrincessHair"),
  wearable("145_GodliLocks"),
  "146_ImperialMoustache",
  wearable("147_TinyCrown"),
  wearable("148_RoyalScepter"),
  wearable("149_RoyalCrown"),
  bodyWearable("150_RoyalRobes"),
  wearable("151_CommonRofl"),
  wearable("152_UncommonRofl"),
  wearable("153_RareRofl"),
  wearable("154_LegendaryRofl"),
  wearable("155_MythicalRofl"),
  wearable("156_GodlikeRofl"),
  "157_LilPumpGoateeLeft",
  wearable("158_LilPumpDrink"),
  wearable("159_LilPumpShades"),
  bodyWearable("160_LilPumpThreads"),
  wearable("161_LilPumpDreads"),
  bodyWearable("162_MiamiShirt"),
  163,
  164,
  165,
  166,
  167,
  168,
  169,
  170,
  171,
  172,
  173,
  174,
  175,
  176,
  177,
  178,
  179,
  180,
  181,
  182,
  183,
  184,
  185,
  186,
  187,
  188,
  189,
  190,
  191,
  192,
  193,
  194,
  195,
  196,
  197,
  198,
  wearable("199_SteampunkGlasses"),
  "200_Steampunk",
  wearable("201_SteampunkGlove"),
  "202_CyberpunkVR",
  bodyWearable("203_GamerJacket"),
  "204_CyberpunkControl",
  wearable("205_GotchiMug"),
  wearable("206_BikerHelmet"),
  wearable("207_BikerJacket"),
  wearable("208_Aviators"),
  "209_HorsehoeMustache",
  wearable("210_H1background"),
  wearable("211_GuyFauwkesMask"),
  wearable("212_1337Laptop"),
  bodyWearable("213_H4xx0rShirt"),
  "214_MatrixEyes",
  wearable("215_CyborgEye"),
  wearable("216_RainbowVomit"),
  wearable("217_CyborgGun"),
  wearable("218_Mohawk"),
  "219_MuttonChops",
  bodyWearable("220_PunkShirt"),
  wearable("221_PirateHat"),
  bodyWearable("222_PirateCoat"),
  wearable("223_HookHand"),
  wearable("224_PiratePatch"),
  wearable("225_Basketball"),
  wearable("226_RedHeadband"),
  wearable("227_MJJersey"),
  wearable("228_10GallonHat"),
  wearable("229_Lasso"),
  wearable("230_WraanglerJeans"),
  bodyWearable("231_ComfyPoncho"),
  wearable("232_PonchoHoodie"),
  wearable("233_UncommonCacti"),
  bodyWearable("234_ShaamanPoncho"),
  wearable("235_ShaamanHoodie"),
  wearable("236_BlueCacti"),
  wearable("237_MythicalCacti"),
  wearable("238_GodlikeCacti"),
  wearable("239_WagieCap"),
  wearable("240_Headphones"),
  bodyWearable("241_WGMIShirt"),
  wearable("242_YellowManbun"),
  wearable("243_TintedShades"),
  bodyWearable("244_VNeckShirt"),
  wearable("245_GeckoHat"),
  wearable("246_APYShades"),
  wearable("247_UpArrow"),
  bodyWearable("248_UpOnlyShirt"),
  249,
  bodyWearable("250_CoinGeckoTee"),
  wearable("251_CoinGeckoCandies"),
  wearable("252_AastronautHelmet"),
  bodyWearable("253_AastronautSuit"),
  wearable("254_uGOTCHIToken"),
  wearable("255_LilBubbleHelmet"),
  bodyWearable("256_LilBubbleSpaceSuit"),
  wearable("257_BitcoinGuitar"),
  bodyWearable("258_Hanfu"),
  259,
  260,
  wearable("261_AantenaBot"),
  262,
  wearable("263_SignalHeadset"),
  264,
  265,
  266,
  267,
  268,
  269,
  270,
  271,
  272,
  273,
  274,
  275,
  276,
  277,
  278,
  279,
  280,
  281,
  282,
  283,
  284,
  285,
  286,
  287,
  288,
  289,
  290,
  291,
  wearable("292_BrunettePonytail"),
  bodyWearable("293_LeatherTunic"),
  wearable("294_BowandArrow"),
  wearable("295_ForkedBeard"),
  wearable("296_DoublesidedAxe"),
  bodyWearable("297_AnimalSkins"),
  wearable("298_HornedHelmet"),
  wearable("299_Longbow"),
  wearable("300_FeatheredCap"),
  wearable("301_AlluringEyes"),
  wearable("302_GeishaHeadpiece"),
  bodyWearable("303_Kimono"),
  wearable("304_PaperFan"),
  wearable("305_SusButterfly"),
  wearable("306_FlowerStuds"),
  bodyWearable("307_FairyWings"),
  wearable("308_RedHair"),
  wearable("309_CitaadelHelm"),
  bodyWearable("310_PlateArmor"),
  wearable("311_SpiritSword"),
  wearable("312_PlateShield"),
  wearable("313_KabutoHelmet"),
  bodyWearable("314_YoroiArmor"),
  wearable("315_HaanzoKatana"),
  //szn 3 baadges
  316,
  317,
  318,
  319,
  320,
  321,
  322,
  323,
  324,
  325,
  326,
  327,
  328,
  329,
  330,
  331,
  // Haalloween Party Badge
  332,
  // TOOORKEY CHAASE Badge
  333,
  //szn 4 baadges
  334,
  335,
  336,
  337,
  338,
  339,
  340,
  341,
  342,
  343,
  344,
  345,
  346,
  347,
  348,
  349,
  // forge wearables
  bodyWearable("350_PixelcraftTee"),
  wearable("351_3DGlasses"),
  wearable("352_PixelcraftSquare"),
  wearable("353_Nimbus"),
  wearable("354_AlchemicaApron"),
  wearable("355_SafetyGlasses"),
  wearable("356_Bandage"),
  wearable("357_NailGun"),
  wearable("358_FlamingApron"),
  wearable("359_ForgeGoggles"),
  wearable("360_GeodeSmasher"),
  wearable("361_Geo"),
  bodyWearable("362_FAKEShirt"),
  wearable("363_FAKEBeret"),
  wearable("364_PaintBrush"),
  wearable("365_PaintPalette"),
  bodyWearable("366_HeavenlyRobes"),
  wearable("367_EyesofDevotion"),
  wearable("368_BeardofDivinity"),
  wearable("369_StaffofCreation"),
  //szn 5 baadges
  370,
  371,
  372,
  373,
  374,
  375,
  376,
  377,
  378,
  379,
  380,
  381,
  382,
  383,
  384,
  385,
];

export const sleeveSvgs = [
  "0_VoidRight",
  // '1_CamoHatRight',
  // '2_CamoPantsRight', // body but doesn't have sleeves
  // '3_MK2GrenadeRight',
  // '4_SnowCamoHatRight',
  // "5_SnowCamoPantsRight", // body but no sleeves
  // '6_M67GrenadeRight',
  // '7_MarineCapRight',
  // sleeves("8_MarineJacket"), // sleeves("8_MarineJacket"),
  // '9_WalkieTalkie',
  // '10_LinkWhiteHatRight',
  sleeves("11_MessDress"), // sleeves("11_MessDress"),
  // '12_LinkBubblyRight',
  // '13_SergeyBeardRight',
  // '14_SergeyEyesRight',
  sleeves("15_RedPlaid"), // sleeves("15_RedPlaid"),
  sleeves("16_BluePlaid"), //  sleeves("16_BluePlaid"),
  // '17_LinkCubeRight',
  // '18_AaveHeroMaskRight',
  sleeves("19_AaveHeroShirt"), // sleeves("19_AaveHeroShirt"),
  // '20_AavePlushRight',
  // '21_CaptainAaveMaskRight',
  sleeves("22_CaptainAaveSuit"), // sleeves("22_CaptainAaveSuit"),
  // '23_CaptainAaveShieldRight',
  // '24_ThaaveHelmetRight',
  // sleeves("25_ThaaveSuit"),
  // '26_ThaaveHammerRight',
  // '27_MarcHairRight',
  sleeves("28_MarcOutfit"), // sleeves("28_MarcOutfit"),
  // '29_REKTSignRight',
  // "30_JordanHairRight",
  sleeves("31_JordanSuit"), // sleeves("31_JordanSuit"),
  // '32_AaveFlagRight',
  // '33_StaniHairRight',
  // '34_StaniVestRight', // sleeves("34_StaniVest"),
  // '35_AaveBoatRight',
  // '36_ETHMaxiGlassesRight',
  sleeves("37_ETHTShirt"),
  // '38_32ETHCoinRight',
  // '39_FoxyMaskRight',
  // '40_FoxyTailRight', // body but no sleeves
  // '41_TrezorWalletRight',
  // '42_NogaraEagleMaskRight',
  sleeves("43_NogaraEagleArmor"),
  // '44_DAOEggRight',
  // '45_ApeMaskRight',
  sleeves("46_HalfRektShirt"),
  // '47_WaifuPillowRight',
  // '48_XibotMohawkRight',
  // '49_CoderdanShadesRight',
  sleeves("50_GldnXrossRobe"),
  // '51_MudgenDiamondRight',
  // '52_GalaxyBrainRight',
  // '53_AllSeeingEyesRight',
  sleeves("54_LlamacornShirt"),
  // '55_AagentHeadsetRight',
  sleeves("56_AagentShirt"),
  // '57_AagentShadesRight',
  // '58_AagentPistolRight',
  // '59_AagentFedoraHatRight',
  // '60_WizardHatRight',
  // '61_WizardHatLegendaryRight',
  // '62_WizardHatMythicalRight',
  // '63_WizardHatGodlikeRight',
  // '64_WizardStaffRight',
  // '65_WizardStaffLegendaryRight',
  // '66_FutureWizardVisorRight',
  // '67_FarmerStrawHatRight',
  // '68_FarmerJeansRight', // Body but no sleeves
  // '69_FarmerPitchforkRight',
  // '70_FarmerHandsawRight',
  // '71_SantagotchiHatRight',
  // '72_JaayHairpieceRight',
  // '73_JaayGlassesRight',
  sleeves("74_JaayHaoSuit"),
  // '75_OKexSignRight',
  // '76_BigGHSTTokenRight',
  // '77_BitcoinBeanieRight',
  // '78_SkaterJeansRight', // Body but no sleeves
  // '79_SkateboardRight',
  // '80_SushiHeadbandRight',
  // '81_SushiRobeRight', // Body but not sleeves
  // '82_SushiRollRight',
  // '83_SushiKnifeRight',
  // '84_GentlemanHatRight',
  sleeves("85_GentlemanSuit"),
  // '86_GentlemanMonocleRight',
  // '87_MinerHelmetRight',
  // '88_MinerJeansRight', // Body but no sleeves
  // '89_MinerPickaxeRight',
  // '90_PajamaHatRight',
  sleeves("91_PajamaPants"),
  // '92_BedtimeMilkRight',
  // '93_FluffyBlanketRight',
  // '94_RunnerSweatbandRight',
  // '95_RunnerShortsRight', // Body but no sleeves
  // '96_WaterBottleRight',
  // '97_PillboxHatRight',
  // '98_LadySkirtRight', // Body but no sleeves
  // '99_LadyParasolRight',
  // '100_LadyClutchRight',
  // '101_WitchHatRight',
  sleeves("102_WitchCape"),
  // '103_WitchWandRight',
  // '104_PortalMageHelmetRight',
  sleeves("105_PortalMageArmor"),
  // '106_PortalMageAxeRight',
  // '107_PortalMageBlackAxeRight',
  // '108_RastaDredsRight',
  sleeves("109_RastaShirt"),
  // '110_JamaicanFlagRight',
  // '111_HazmatHoodRight',
  sleeves("112_HazmatSuit"),
  // '113_UraniumRodRight',
  sleeves("114_RedHawaiianShirt"),
  sleeves("115_BlueHawaiianShirt"),
  // '116_CoconutRight',
  // '117_DealWithItShadesRight',
  // '118_WaterJugRight',
  // '119_BabyBottleRight',
  // '120_MartiniRight',
  // '121_WineBottleRight',
  // '122_MilkshakeRight',
  // '123_AppleJuiceRight',
  // '124_BeerHelmetRight',
  // sleeves("125_TrackSuit"),
  // '126_KinshipPotionRight',
  // '127_GreaterKinshipPotionRight',
  // '128_XPPotionRight',
  // '129_GreaterXPPotionRight',
  // '130_FireballRight',
  // '131_DragonHornsRight',
  // '132_DragonWingsRight',
  // '133_PointyHornsRight', // Body wearable but not sleeves
  // '134_L2SignRight',
  sleeves("135_PolygonShirt"),
  // '136_PolygonCapRight',
  // '137_VoteSignRight',
  sleeves("138_SnapshotShirt"),
  // '139_SnapshotHatRight',
  // '140_ElfEarsRight',
  // '141_GemstoneRingRight',
  // '142_PrincessTiaraRight',
  // '143_GoldNecklaceRight',
  // '144_PrincessHairRight',
  // '145_GodliLocksRight',
  // '146_ImperialMoustacheRight',
  // '147_TinyCrownRight',
  // '148_RoyalScepterRight',
  // '149_RoyalCrownRight',
  sleeves("150_RoyalRobes"),
  // '151_CommonRoflRight',
  // '152_UncommonRoflRight',
  // '153_RareRoflRight',
  // '154_LegendaryRoflRight',
  // '155_MythicalRoflRight',
  // '156_GodlikeRoflRight',
  // '157_LilPumpGoateeRight',
  // '158_LilPumpDrinkRight',
  // '159_LilPumpShadesRight',
  sleeves("160_LilPumpThreads"),
  // '161_LilPumpDreadsRight',
  sleeves("162_MiamiShirt"),
  // '199_SteampunkGlassesRight',
  // '200_SteampunkRight',
  // '201_SteampunkGlove',
  // '202_CyberpunkVRRight',
  sleeves("203_GamerJacket"),
  // '204_CyberpunkControlRight',
  // '205_CoffeeCupRight',
  // '206_AagentRadioRight',
  // sleeves('207_BikerJacket'),
  sleeves("213_H4xx0rShirt"),
  sleeves("220_PunkShirt"),
  sleeves("222_PirateCoat"),
  sleeves("231_ComfyPoncho"),
  // "232_PonchoHoodie",
  sleeves("234_ShaamanPoncho"),
  sleeves("241_WGMIShirt"),
  sleeves("244_VNeckShirt"),
  "248_UpOnlyShirt",
  "250_CoinGeckoTee",
  "253_AastronautSuit",
  "256_LilBubbleSpaceSuit",
  sleeves("258_Hanfu"),
  sleeves("293_LeatherTunic"),
  sleeves("297_AnimalSkins"),
  sleeves("303_Kimono"),
  sleeves("307_FairyWings"),
  sleeves("310_PlateArmor"),
  sleeves("314_YoroiArmor"),
  "sleeves gap",
  "sleeves gap",
  sleeves("316_MarineJacket"),
  sleeves("317_ThaaveSuit"),
  sleeves("318_TrackSuit"),
  // forge wearables
  sleeves("350_PixelcraftTee"),
  sleeves("362_FAKEShirt"),
  sleeves("366_HeavenlyRobes"),
];

function stripSvg(svg: string) {
  // removes svg tag
  if (svg.includes("viewBox")) {
    svg = svg.slice(svg.indexOf(">") + 1);
    svg = svg.replace("</svg>", "");
  }
  return svg;
}

function readSvg(name: string) {
  return stripSvg(fs.readFileSync(`./svgs/svgItems/${name}.svg`, "utf8"));
}

function wearable(name: string) {
  const svg = readSvg(name);
  // svg = `<g>${svg}</g>`
  return svg;
}

function bodyWearable(name: string) {
  let svg = readSvg(name);
  return svg;
}

function sleeves(name: string) {
  const leftSleevesUp =
    '<g class="gotchi-sleeves gotchi-sleeves-left gotchi-sleeves-up">' +
    readSvg(`${name}LeftUp`) +
    "</g>";
  const leftSleeves =
    '<g class="gotchi-sleeves gotchi-sleeves-left gotchi-sleeves-down">' +
    readSvg(`${name}Left`) +
    "</g>";
  const rightSleevesUp =
    '<g class="gotchi-sleeves gotchi-sleeves-right gotchi-sleeves-up">' +
    readSvg(`${name}RightUp`) +
    "</g>";
  const rightSleeves =
    '<g class="gotchi-sleeves gotchi-sleeves-right gotchi-sleeves-down">' +
    readSvg(`${name}Right`) +
    "</g>";
  let svg =
    "<g>" +
    leftSleevesUp +
    leftSleeves +
    rightSleevesUp +
    rightSleeves +
    "</g>";
  return svg;
}

/* exports.wearablesSvgs = wearablesSvgs */
