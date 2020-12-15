const COUNTRY_FLAG_EMOJIS = {
    "🇦🇷": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-argentina_1f1e6-1f1f7.png",
    "🇧🇷": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-brazil_1f1e7-1f1f7.png",
    "🇧🇻": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-bouvet-island_1f1e7-1f1fb.png",
    "🇨🇭": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-switzerland_1f1e8-1f1ed.png",
    "🇨🇿": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-czechia_1f1e8-1f1ff.png",
    "🇦🇮": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-anguilla_1f1e6-1f1ee.png",
    "🇦🇱": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-albania_1f1e6-1f1f1.png",
    "🇦🇩": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-andorra_1f1e6-1f1e9.png",
    "🇦🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-armenia_1f1e6-1f1f2.png",
    "🇦🇪": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-united-arab-emirates_1f1e6-1f1ea.png",
    "🇬🇧": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-united-kingdom_1f1ec-1f1e7.png",
    "🇦🇨": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-ascension-island_1f1e6-1f1e8.png",
    "🇦🇫": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-afghanistan_1f1e6-1f1eb.png",
    "🇦🇬": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-antigua-barbuda_1f1e6-1f1ec.png",
    "🇦🇴": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-angola_1f1e6-1f1f4.png",
    "🇦🇶": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-antarctica_1f1e6-1f1f6.png",
    "🇦🇺": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-australia_1f1e6-1f1fa.png",
    "🇮🇹": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-italy_1f1ee-1f1f9.png",
    "🇦🇿": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-azerbaijan_1f1e6-1f1ff.png",
    "🇦🇽": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-aland-islands_1f1e6-1f1fd.png",
    "🇧🇧": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-barbados_1f1e7-1f1e7.png",
    "🇦🇸": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-american-samoa_1f1e6-1f1f8.png",
    "🇦🇼": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-aruba_1f1e6-1f1fc.png",
    "🇦🇹": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-austria_1f1e6-1f1f9.png",
    "🇧🇭": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-bahrain_1f1e7-1f1ed.png",
    "🇧🇩": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-bangladesh_1f1e7-1f1e9.png",
    "🇧🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-bermuda_1f1e7-1f1f2.png",
    "🇧🇦": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-bosnia-herzegovina_1f1e7-1f1e6.png",
    "🇧🇯": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-benin_1f1e7-1f1ef.png",
    "🇧🇱": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-st-barthelemy_1f1e7-1f1f1.png",
    "🇧🇪": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-belgium_1f1e7-1f1ea.png",
    "🇧🇫": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-burkina-faso_1f1e7-1f1eb.png",
    "🇨🇩": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-congo-kinshasa_1f1e8-1f1e9.png",
    "🇨🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-cameroon_1f1e8-1f1f2.png",
    "🇨🇰": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-cook-islands_1f1e8-1f1f0.png",
    "🇧🇿": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-belize_1f1e7-1f1ff.png",
    "🇨🇺": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-cuba_1f1e8-1f1fa.png",
    "🇧🇾": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-belarus_1f1e7-1f1fe.png",
    "🇨🇱": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-chile_1f1e8-1f1f1.png",
    "🇨🇨": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-cocos-keeling-islands_1f1e8-1f1e8.png",
    "🇨🇵": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-clipperton-island_1f1e8-1f1f5.png",
    "🇧🇼": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-botswana_1f1e7-1f1fc.png",
    "🇧🇴": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-bolivia_1f1e7-1f1f4.png",
    "🇩🇬": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-diego-garcia_1f1e9-1f1ec.png",
    "🇧🇬": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-bulgaria_1f1e7-1f1ec.png",
    "🇨🇷": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-costa-rica_1f1e8-1f1f7.png",
    "🇩🇴": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-dominican-republic_1f1e9-1f1f4.png",
    "🇪🇪": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-estonia_1f1ea-1f1ea.png",
    "🇧🇸": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-bahamas_1f1e7-1f1f8.png",
    "🇨🇾": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-cyprus_1f1e8-1f1fe.png",
    "🇩🇿": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-algeria_1f1e9-1f1ff.png",
    "🇨🇴": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-colombia_1f1e8-1f1f4.png",
    "🇪🇺": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-european-union_1f1ea-1f1fa.png",
    "🇨🇫": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-central-african-republic_1f1e8-1f1eb.png",
    "🇨🇬": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-congo-brazzaville_1f1e8-1f1ec.png",
    "🇩🇪": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-germany_1f1e9-1f1ea.png",
    "🇨🇦": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-canada_1f1e8-1f1e6.png",
    "🇨🇳": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-china_1f1e8-1f1f3.png",
    "🇩🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-dominica_1f1e9-1f1f2.png",
    "🇧🇳": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-brunei_1f1e7-1f1f3.png",
    "🇪🇨": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-ecuador_1f1ea-1f1e8.png",
    "🇧🇹": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-bhutan_1f1e7-1f1f9.png",
    "🇪🇦": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-ceuta-melilla_1f1ea-1f1e6.png",
    "🇨🇮": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-cote-divoire_1f1e8-1f1ee.png",
    "🇩🇰": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-denmark_1f1e9-1f1f0.png",
    "🇧🇶": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-caribbean-netherlands_1f1e7-1f1f6.png",
    "🇪🇸": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-spain_1f1ea-1f1f8.png",
    "🇩🇯": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-djibouti_1f1e9-1f1ef.png",
    "🇨🇻": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-cape-verde_1f1e8-1f1fb.png",
    "🇨🇼": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-curacao_1f1e8-1f1fc.png",
    "🇪🇬": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-egypt_1f1ea-1f1ec.png",
    "🇪🇷": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-eritrea_1f1ea-1f1f7.png",
    "🇧🇮": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-burundi_1f1e7-1f1ee.png",
    "🇫🇰": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-falkland-islands_1f1eb-1f1f0.png",
    "🇫🇯": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-fiji_1f1eb-1f1ef.png",
    "🇬🇫": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-french-guiana_1f1ec-1f1eb.png",
    "🇨🇽": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-christmas-island_1f1e8-1f1fd.png",
    "🇪🇭": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-western-sahara_1f1ea-1f1ed.png",
    "🇫🇮": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-finland_1f1eb-1f1ee.png",
    "🇬🇦": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-gabon_1f1ec-1f1e6.png",
    "🇪🇹": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-ethiopia_1f1ea-1f1f9.png",
    "🇫🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-micronesia_1f1eb-1f1f2.png",
    "🇬🇪": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-georgia_1f1ec-1f1ea.png",
    "🇬🇸": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-south-georgia-south-sandwich-islands_1f1ec-1f1f8.png",
    "🇫🇴": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-faroe-islands_1f1eb-1f1f4.png",
    "🇬🇳": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-guinea_1f1ec-1f1f3.png",
    "🇬🇩": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-grenada_1f1ec-1f1e9.png",
    "🇫🇷": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-france_1f1eb-1f1f7.png",
    "🇬🇭": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-ghana_1f1ec-1f1ed.png",
    "🇬🇬": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-guernsey_1f1ec-1f1ec.png",
    "🇬🇮": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-gibraltar_1f1ec-1f1ee.png",
    "🇬🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-gambia_1f1ec-1f1f2.png",
    "🇬🇹": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-guatemala_1f1ec-1f1f9.png",
    "🇬🇷": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-greece_1f1ec-1f1f7.png",
    "🇭🇰": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-hong-kong-sar-china_1f1ed-1f1f0.png",
    "🇬🇱": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-greenland_1f1ec-1f1f1.png",
    "🇬🇶": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-equatorial-guinea_1f1ec-1f1f6.png",
    "🇭🇷": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-croatia_1f1ed-1f1f7.png",
    "🇭🇺": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-hungary_1f1ed-1f1fa.png",
    "🇬🇵": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-guadeloupe_1f1ec-1f1f5.png",
    "🇬🇼": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-guinea-bissau_1f1ec-1f1fc.png",
    "🇭🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-heard-mcdonald-islands_1f1ed-1f1f2.png",
    "🇬🇺": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-guam_1f1ec-1f1fa.png",
    "🇮🇸": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-iceland_1f1ee-1f1f8.png",
    "🇬🇾": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-guyana_1f1ec-1f1fe.png",
    "🇮🇳": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-india_1f1ee-1f1f3.png",
    "🇮🇨": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-canary-islands_1f1ee-1f1e8.png",
    "🇮🇶": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-iraq_1f1ee-1f1f6.png",
    "🇮🇪": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-ireland_1f1ee-1f1ea.png",
    "🇮🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-isle-of-man_1f1ee-1f1f2.png",
    "🇭🇳": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-honduras_1f1ed-1f1f3.png",
    "🇮🇴": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-british-indian-ocean-territory_1f1ee-1f1f4.png",
    "🇮🇩": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-indonesia_1f1ee-1f1e9.png",
    "🇭🇹": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-haiti_1f1ed-1f1f9.png",
    "🇰🇬": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-kyrgyzstan_1f1f0-1f1ec.png",
    "🇰🇪": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-kenya_1f1f0-1f1ea.png",
    "🇰🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-comoros_1f1f0-1f1f2.png",
    "🇮🇷": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-iran_1f1ee-1f1f7.png",
    "🇮🇱": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-israel_1f1ee-1f1f1.png",
    "🇯🇪": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-jersey_1f1ef-1f1ea.png",
    "🇰🇭": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-cambodia_1f1f0-1f1ed.png",
    "🇯🇵": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-japan_1f1ef-1f1f5.png",
    "🇯🇴": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-jordan_1f1ef-1f1f4.png",
    "🇯🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-jamaica_1f1ef-1f1f2.png",
    "🇰🇾": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-cayman-islands_1f1f0-1f1fe.png",
    "🇱🇦": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-laos_1f1f1-1f1e6.png",
    "🇱🇨": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-st-lucia_1f1f1-1f1e8.png",
    "🇱🇷": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-liberia_1f1f1-1f1f7.png",
    "🇰🇮": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-kiribati_1f1f0-1f1ee.png",
    "🇰🇳": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-st-kitts-nevis_1f1f0-1f1f3.png",
    "🇰🇿": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-kazakhstan_1f1f0-1f1ff.png",
    "🇰🇵": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-north-korea_1f1f0-1f1f5.png",
    "🇱🇮": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-liechtenstein_1f1f1-1f1ee.png",
    "🇰🇼": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-kuwait_1f1f0-1f1fc.png",
    "🇵🇭": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-philippines_1f1f5-1f1ed.png",
    "🇱🇧": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-lebanon_1f1f1-1f1e7.png",
    "🇵🇰": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-pakistan_1f1f5-1f1f0.png",
    "🇵🇱": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-poland_1f1f5-1f1f1.png",
    "🇱🇸": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-lesotho_1f1f1-1f1f8.png",
    "🇰🇷": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-south-korea_1f1f0-1f1f7.png",
    "🇲🇨": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-monaco_1f1f2-1f1e8.png",
    "🇲🇩": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-moldova_1f1f2-1f1e9.png",
    "🇱🇻": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-latvia_1f1f1-1f1fb.png",
    "🇱🇰": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-sri-lanka_1f1f1-1f1f0.png",
    "🇱🇹": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-lithuania_1f1f1-1f1f9.png",
    "🇱🇺": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-luxembourg_1f1f1-1f1fa.png",
    "🇲🇬": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-madagascar_1f1f2-1f1ec.png",
    "🇲🇪": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-montenegro_1f1f2-1f1ea.png",
    "🇲🇫": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-st-martin_1f1f2-1f1eb.png",
    "🇲🇳": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-mongolia_1f1f2-1f1f3.png",
    "🇲🇭": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-marshall-islands_1f1f2-1f1ed.png",
    "🇲🇰": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-north-macedonia_1f1f2-1f1f0.png",
    "🇲🇱": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-mali_1f1f2-1f1f1.png",
    "🇱🇾": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-libya_1f1f1-1f1fe.png",
    "🇲🇦": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-morocco_1f1f2-1f1e6.png",
    "🇲🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-myanmar-burma_1f1f2-1f1f2.png",
    "🇲🇾": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-malaysia_1f1f2-1f1fe.png",
    "🇲🇹": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-malta_1f1f2-1f1f9.png",
    "🇲🇵": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-northern-mariana-islands_1f1f2-1f1f5.png",
    "🇲🇸": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-montserrat_1f1f2-1f1f8.png",
    "🇳🇺": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-niue_1f1f3-1f1fa.png",
    "🇲🇿": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-mozambique_1f1f2-1f1ff.png",
    "🇲🇽": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-mexico_1f1f2-1f1fd.png",
    "🇲🇶": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-martinique_1f1f2-1f1f6.png",
    "🇴🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-oman_1f1f4-1f1f2.png",
    "🇺🇸": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-united-states_1f1fa-1f1f8.png",
    "🇳🇬": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-nigeria_1f1f3-1f1ec.png",
    "🇳🇫": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-norfolk-island_1f1f3-1f1eb.png",
    "🇵🇹": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-portugal_1f1f5-1f1f9.png",
    "🇵🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-st-pierre-miquelon_1f1f5-1f1f2.png",
    "🇲🇴": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-macao-sar-china_1f1f2-1f1f4.png",
    "🇵🇸": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-palestinian-territories_1f1f5-1f1f8.png",
    "🇳🇨": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-new-caledonia_1f1f3-1f1e8.png",
    "🇵🇫": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-french-polynesia_1f1f5-1f1eb.png",
    "🇲🇺": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-mauritius_1f1f2-1f1fa.png",
    "🇳🇪": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-niger_1f1f3-1f1ea.png",
    "🇲🇼": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-malawi_1f1f2-1f1fc.png",
    "🇳🇵": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-nepal_1f1f3-1f1f5.png",
    "🇲🇻": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-maldives_1f1f2-1f1fb.png",
    "🇵🇾": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-paraguay_1f1f5-1f1fe.png",
    "🇳🇱": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-netherlands_1f1f3-1f1f1.png",
    "🇲🇷": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-mauritania_1f1f2-1f1f7.png",
    "🇳🇮": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-nicaragua_1f1f3-1f1ee.png",
    "🇳🇴": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-norway_1f1f3-1f1f4.png",
    "🇳🇿": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-new-zealand_1f1f3-1f1ff.png",
    "🇳🇦": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-namibia_1f1f3-1f1e6.png",
    "🇵🇷": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-puerto-rico_1f1f5-1f1f7.png",
    "🇵🇦": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-panama_1f1f5-1f1e6.png",
    "🇵🇬": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-papua-new-guinea_1f1f5-1f1ec.png",
    "🇵🇳": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-pitcairn-islands_1f1f5-1f1f3.png",
    "🇳🇷": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-nauru_1f1f3-1f1f7.png",
    "🇷🇸": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-serbia_1f1f7-1f1f8.png",
    "🇵🇪": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-peru_1f1f5-1f1ea.png",
    "🇵🇼": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-palau_1f1f5-1f1fc.png",
    "🇷🇪": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-reunion_1f1f7-1f1ea.png",
    "🇸🇧": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-solomon-islands_1f1f8-1f1e7.png",
    "🇷🇼": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-rwanda_1f1f7-1f1fc.png",
    "🇸🇦": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-saudi-arabia_1f1f8-1f1e6.png",
    "🇶🇦": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-qatar_1f1f6-1f1e6.png",
    "🇸🇯": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-svalbard-jan-mayen_1f1f8-1f1ef.png",
    "🇹🇦": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-tristan-da-cunha_1f1f9-1f1e6.png",
    "🇸🇮": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-slovenia_1f1f8-1f1ee.png",
    "🇷🇴": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-romania_1f1f7-1f1f4.png",
    "🇸🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-san-marino_1f1f8-1f1f2.png",
    "🇸🇱": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-sierra-leone_1f1f8-1f1f1.png",
    "🇸🇽": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-sint-maarten_1f1f8-1f1fd.png",
    "🇸🇭": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-st-helena_1f1f8-1f1ed.png",
    "🇸🇩": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-sudan_1f1f8-1f1e9.png",
    "🇸🇨": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-seychelles_1f1f8-1f1e8.png",
    "🇸🇷": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-suriname_1f1f8-1f1f7.png",
    "🇸🇿": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-eswatini_1f1f8-1f1ff.png",
    "🇸🇴": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-somalia_1f1f8-1f1f4.png",
    "🇷🇺": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-russia_1f1f7-1f1fa.png",
    "🇹🇳": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-tunisia_1f1f9-1f1f3.png",
    "🇸🇪": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-sweden_1f1f8-1f1ea.png",
    "🇹🇫": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-french-southern-territories_1f1f9-1f1eb.png",
    "🇹🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-turkmenistan_1f1f9-1f1f2.png",
    "🇺🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-us-outlying-islands_1f1fa-1f1f2.png",
    "🇹🇴": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-tonga_1f1f9-1f1f4.png",
    "🇹🇩": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-chad_1f1f9-1f1e9.png",
    "🇸🇬": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-singapore_1f1f8-1f1ec.png",
    "🇸🇹": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-sao-tome-principe_1f1f8-1f1f9.png",
    "🇹🇹": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-trinidad-tobago_1f1f9-1f1f9.png",
    "🇸🇳": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-senegal_1f1f8-1f1f3.png",
    "🇺🇬": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-uganda_1f1fa-1f1ec.png",
    "🇻🇬": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-british-virgin-islands_1f1fb-1f1ec.png",
    "🇹🇭": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-thailand_1f1f9-1f1ed.png",
    "🇸🇻": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-el-salvador_1f1f8-1f1fb.png",
    "🇹🇰": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-tokelau_1f1f9-1f1f0.png",
    "🇻🇨": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-st-vincent-grenadines_1f1fb-1f1e8.png",
    "🇿🇲": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-zambia_1f1ff-1f1f2.png",
    "🇽🇰": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-kosovo_1f1fd-1f1f0.png",
    "🇺🇾": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-uruguay_1f1fa-1f1fe.png",
    "🇹🇨": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-turks-caicos-islands_1f1f9-1f1e8.png",
    "🇹🇿": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-tanzania_1f1f9-1f1ff.png",
    "🇹🇼": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-taiwan_1f1f9-1f1fc.png",
    "🇹🇱": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-timor-leste_1f1f9-1f1f1.png",
    "🇻🇺": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-vanuatu_1f1fb-1f1fa.png",
    "🇸🇾": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-syria_1f1f8-1f1fe.png",
    "🇹🇯": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-tajikistan_1f1f9-1f1ef.png",
    "🇸🇸": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-south-sudan_1f1f8-1f1f8.png",
    "🇹🇻": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-tuvalu_1f1f9-1f1fb.png",
    "🇻🇦": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-vatican-city_1f1fb-1f1e6.png",
    "🇻🇳": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-vietnam_1f1fb-1f1f3.png",
    "🇻🇮": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-us-virgin-islands_1f1fb-1f1ee.png",
    "🇺🇳": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-united-nations_1f1fa-1f1f3.png",
    "🇹🇷": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-turkey_1f1f9-1f1f7.png",
    "🇾🇹": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-mayotte_1f1fe-1f1f9.png",
    "🇹🇬": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-togo_1f1f9-1f1ec.png",
    "🇸🇰": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-slovakia_1f1f8-1f1f0.png",
    "🇺🇦": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-ukraine_1f1fa-1f1e6.png",
    "🇼🇫": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-wallis-futuna_1f1fc-1f1eb.png",
    "🇾🇪": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-yemen_1f1fe-1f1ea.png",
    "🇼🇸": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-samoa_1f1fc-1f1f8.png",
    "🇺🇿": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-uzbekistan_1f1fa-1f1ff.png",
    "🇻🇪": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-venezuela_1f1fb-1f1ea.png",
    "🇿🇼": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-zimbabwe_1f1ff-1f1fc.png",
    "🇿🇦": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-south-africa_1f1ff-1f1e6.png",
    "🏴󠁧󠁢󠁷󠁬󠁳󠁿": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-wales_1f3f4-e0067-e0062-e0077-e006c-e0073-e007f.png",
    "🏴󠁧󠁢󠁥󠁮󠁧󠁿": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png",
    "🏴󠁧󠁢󠁳󠁣󠁴󠁿": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-scotland_1f3f4-e0067-e0062-e0073-e0063-e0074-e007f.png",
}
