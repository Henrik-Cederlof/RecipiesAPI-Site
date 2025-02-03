const getFlag = (strArea: string): string => {
    const flags: { [key: string]: string } = {
        "American": "US",
        "British": "GB",
        "Canadian": "CA",
        "Chinese": "CN",
        "Croatian": "HR",
        "Dutch": "NL",
        "Egyptian": "EG",
        "Philippines": "FP",
        "French": "FR",
        "Greek": "GR",
        "Indian": "IN",
        "Irish": "IE",
        "Italian": "IT",
        "Jamaican": "JM",
        "Japanese": "JP",
        "Kenyan": "KE",
        "Malaysian": "MY",
        "Mexican": "MX",
        "Moroccan": "MA",
        "Polish": "PL",
        "Portuguese": "PT",
        "Russian": "RU",
        "Spanish": "ES",
        "Thai": "TH",
        "Tunisian": "TN",
        "Turkish": "TR",
        "Ukrainian": "UA",
        "Vietnamese": "VN",
        "Unknown": "UN"
    };
    const countryCode = flags[strArea];
    return countryCode ? `https://flagsapi.com/${countryCode}/shiny/64.png` : '';
};

export default getFlag;