#!/usr/bin/env python3

from app import app
from models import db , Countries




if __name__ == '__main__':
    with app.app_context():
        print("Seeding database...")

        Countries.query.delete()
        countries = []

        c = Countries(
            name = "Spain",
            continent = "Europe",
            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6JmxcqFkaHQeYYowiqLOzclcdhwCaGVtTg&s",
            currency = "Euro (€)",
            language = "Spanish",
            mannerism = "Dress conservatively in churches, avoid loud behavior in public, greet with a handshake or kiss on both cheeks.",
            visa = "https://www.spainvisa.eu/",
            phrases = "Hello: Hola, Goodbye: Adiós, Thank you: Gracias, Sorry: Lo siento, No: No",
            tipping = "There is no specific tipping culture. 10% is appreciated.",
            when = "Spring (April to June) and Fall (September to November)",
            foods = "Paella, Tapas, Gazpacho, Churros",
            links = "https://www.tripadvisor.com/Tourism-g187427-Spain-Vacations.html"
            )
        
        countries.append(c)
        
        c = Countries(
            name = "France",
            continent = "Europe",
            image= "/image/france.png",
            currency = "Euro (€)",
            language = "French",
            mannerism = "Dress stylishly, greet with a handshake, maintain personal space.",
            visa = "https://france-visas.gouv.fr/",
            phrases = "Hello: Bonjour, Goodbye: Au revoir, Thank you: Merci, Sorry: Pardon, No: Non",
            tipping = "Service charge included. Additional tipping is not mandatory.",
            when = "Spring (April to June) and Fall (September to November)",
            foods = "Croissant, Baguette, Coq au Vin, Ratatouille",
            links = "https://www.tripadvisor.com/Tourism-g187070-France-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Italy",
            continent = "Europe",
            image = "/image/italy.png",
            currency = "Euro (€)",
            language = "Italian",
            mannerism = "Dress elegantly, greet with a kiss on both cheeks, avoid discussing politics.",
            visa = "https://vistoperitalia.esteri.it/home/en",
            phrases = "Hello: Ciao, Goodbye: Arrivederci, Thank you: Grazie, Sorry: Mi dispiace, No: No",
            tipping = "Service charge included. Additional tipping is not mandatory but appreciated.",
            when = "Spring (April to June) and Fall (September to November)",
            foods = "Pizza, Pasta, Gelato, Risotto",
            links = "https://www.tripadvisor.com/Tourism-g187768-Italy-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "England",
            continent = "Europe",
            image = "/image/england.png",
            currency = "British Pound (£)",
            language = "English",
            mannerism = "Dress conservatively, respect personal space, queue politely.",
            visa = "https://www.gov.uk/browse/visas-immigration",
            phrases = "Hello: Hello, Goodbye: Goodbye, Thank you: Thank you, Sorry: Sorry, No: No",
            tipping = "10-15% in restaurants.",
            when = "Spring (April to June) and Summer (July to September)",
            foods = "Fish and Chips, Roast Beef, English Breakfast, Afternoon Tea",
            links = "https://www.tripadvisor.com/Tourism-g186216-London_England-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Switzerland",
            continent = "Europe",
            image = "/image/switerland.png",
            currency = "Swiss Franc (CHF)",
            language = "German, French, Italian, Romansh",
            mannerism = "Dress neatly, greet with a handshake, respect punctuality.",
            visa = "https://www.schengenvisainfo.com/switzerland-visa/",
            phrases = "Hello: Grüezi (German), Bonjour (French), Buongiorno (Italian), Allegra (Romansh), Goodbye: Auf Wiedersehen (German), Au revoir (French), Arrivederci (Italian), Goodbai (Romansh), Thank you: Danke (German), Merci (French), Grazie (Italian), Grazia (Romansh), Sorry: Entschuldigung (German), Pardon (French), Scusa (Italian), Pardon (Romansh), No: Nein (German), Non (French), No (Italian), Na (Romansh)",
            tipping = "Tipping is included in the service charge.",
            when = "Summer (June to August) for outdoor activities, Winter (December to February) for skiing.",
            foods = "Fondue, Raclette, Rösti, Swiss Chocolate",
            links = "https://www.tripadvisor.com/Tourism-g188045-Switzerland-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Greece",
            continent = "Europe",
            image = "/image/greece.png",
            currency = "Euro (€)",
            language = "Greek",
            mannerism = "Dress casually, greet with a handshake, avoid discussing sensitive topics.",
            visa = "https://www.schengenvisainfo.com/greece-visa/",
            phrases = "Hello: Γεια σας (Yasas), Goodbye: Αντίο (Adio), Thank you: Ευχαριστώ (Efharisto), Sorry: Συγνώμη (Signomi), No: Όχι (Ohi)",
            tipping = "5-10% in restaurants.",
            when = "Summer (June to August) for beach holidays, Spring (April to June) and Fall (September to November) for sightseeing.",
            foods = "Moussaka, Souvlaki, Gyro, Greek Salad",
            links = "https://www.tripadvisor.com/Tourism"
            )
        
        countries.append(c)

        c = Countries(
            name = "Iceland",
            continent = "Europe",
            image = "/image/iceland.png",
            currency = "Icelandic Króna (ISK)",
            language = "Icelandic",
            mannerism = "Dress warmly, greet with a handshake, respect nature.",
            visa = "https://utl.is/index.php/en/",
            phrases = "Hello: Halló, Goodbye: Bless, Thank you: Takk, Sorry: Fyrirgefðu, No: Nei",
            tipping = "Not expected but rounding up the bill is appreciated.",
            when = "Summer (June to August) for midnight sun, Winter (November to February) for Northern Lights.",
            foods = "Lamb, Skyr, Pylsur, Rúgbrauð",
            links = "https://www.tripadvisor.com/Tourism-g189952-Iceland-Vacations.html"
            )
        
        countries.append(c)
        
        c = Countries(
            name = "Japan",
            continent = "Asia",
            image = "/image/japan.png",
            currency = "Japanese Yen (¥)",
            language = "Japanese",
            mannerism = "Bow when greeting, remove shoes indoors, avoid loud conversations in public.",
            visa = "https://www.jp.emb-japan.go.jp/itpr_en/visa.html",
            phrases = "Hello: こんにちは (Konnichiwa), Goodbye: さようなら (Sayōnara), Thank you: ありがとう (Arigatō), Sorry: ごめんなさい (Gomen'nasai), No: いいえ (Iie)",
            tipping = "Tipping is not customary.",
            when = "Spring (March to May) and Autumn (September to November)",
            foods = "Sushi, Ramen, Tempura, Wagyu Beef",
            links = "https://www.tripadvisor.com/Tourism-g294232-Japan-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Thailand",
            continent = "Asia",
            image = "/image/thailand.png",
            currency = "Thai Baht (฿)",
            language = "Thai",
            mannerism = "Wai (a slight bow with hands pressed together) when greeting, avoid physical contact in public.",
            visa = "https://www.thaiembassy.com/thailand/thailand-visa.php",
            phrases = "Hello: สวัสดี (Sawasdee), Goodbye: ลาก่อน (La khon), Thank you: ขอบคุณ (Khob khun), Sorry: ขอโทษ (Khaw thot), No: ไม่ (Mai)",
            tipping = "Tipping is not mandatory but appreciated, especially in tourist areas.",
            when = "November to February (cool and dry season)",
            foods = "Pad Thai, Som Tum (Papaya Salad), Tom Yum Goong (Spicy Shrimp Soup), Green Curry",
            links = "https://www.tripadvisor.com/Tourism-g293915-Thailand-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Vietnam",
            continent = "Asia",
            image = "/image/vietnam.png",
            currency = "Vietnamese Dong (₫)",
            language = "Vietnamese",
            mannerism = "Bow slightly when greeting, use both hands when giving or receiving objects, avoid public displays of affection.",
            visa = "https://vietnamvisa.govt.vn/",
            phrases = "Hello: Xin chào, Goodbye: Tạm biệt, Thank you: Cảm ơn, Sorry: Xin lỗi, No: Không",
            tipping = "Tipping is not customary but appreciated in tourist areas.",
            when = "December to February (cool and dry season)",
            foods = "Pho, Banh Mi, Spring Rolls, Bun Cha",
            links = "https://www.tripadvisor.com/Tourism-g293921-Vietnam-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "India",
            continent = "Asia",
            image = "/image/india.png",
            currency = "Indian Rupee (₹)",
            language = "Hindi, English",
            mannerism = "Namaste (a slight bow with palms pressed together) when greeting, remove shoes when entering homes or temples, avoid public displays of affection.",
            visa = "https://indianvisaonline.gov.in/evisa/tvoa.html",
            phrases = "Hello: नमस्ते (Namaste), Goodbye: अलविदा (Alvida), Thank you: धन्यवाद (Dhanyavad), Sorry: माफ़ कीजिए (Maaf kijiye), No: नहीं (Nahin)",
            tipping = "Tipping is not customary but appreciated.",
            when = "October to March (cooler and drier months)",
            foods = "Curry, Tandoori Chicken, Biryani, Masala Dosa",
            links = "https://www.tripadvisor.com/Tourism-g293860-India-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Nepal",
            continent = "Asia",
            image = "/image/nepal.png",
            currency = "Nepalese Rupee (₨)",
            language = "Nepali",
            mannerism = "Namaste (a slight bow with palms pressed together) when greeting, remove shoes when entering homes or temples, avoid public displays of affection.",
            visa = "https://www.nepalimmigration.gov.np/",
            phrases = "Hello: नमस्ते (Namaste), Goodbye: नमस्कार (Namaskar), Thank you: धन्यवाद (Dhanyabad), Sorry: माफ़ गर्नुहोस् (Maaf garnuhos), No: होईन (Hoina)",
            tipping = "Tipping is not customary but appreciated.",
            when = "October to December (clear skies for mountain views)",
            foods = "Dal Bhat, Momo, Sel Roti, Newari Cuisine",
            links = "https://www.tripadvisor.com/Tourism-g293889-Nepal-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "South Korea",
            continent = "Asia",
            image = "/image/southKorea.png",
            currency = "South Korean Won (₩)",
            language = "Korean",
            mannerism = "Bow slightly when greeting, remove shoes indoors, avoid public displays of affection.",
            visa = "https://www.visa.go.kr/",
            phrases = "Hello: 안녕하세요 (Annyeonghaseyo), Goodbye: 안녕히 가세요 (Annyeonghi gaseyo), Thank you: 감사합니다 (Gamsahamnida), Sorry: 미안합니다 (Mianhamnida), No: 아니요 (Aniyo)",
            tipping = "Tipping is not customary.",
            when = "Spring (April to June) and Autumn (September to November)",
            foods = "Kimchi, Bibimbap, Bulgogi, Korean BBQ",
            links = "https://www.tripadvisor.com/Tourism-g294196-South_Korea-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "China",
            continent = "Asia",
            image = "/image/china.png",
            currency = "Chinese Yuan (¥)",
            language = "Mandarin",
            mannerism = "Greet with a nod or handshake, avoid sensitive political topics, accept gifts with both hands.",
            visa = "https://www.visaforchina.org/",
            phrases = "Hello: 你好 (Nǐ hǎo), Goodbye: 再见 (Zàijiàn), Thank you: 谢谢 (Xièxiè), Sorry: 对不起 (Duìbùqǐ), No: 不 (Bù)",
            tipping = "Tipping is not expected.",
            when = "Spring (April to May) and Autumn (September to October)",
            foods = "Peking Duck, Dumplings, Hot Pot, Kung Pao Chicken",
            links = "https://www.tripadvisor.com/Tourism-g294211-China-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Saudi Arabia",
            continent = "Middle East",
            image = "/image/saudi_arabia.png",
            currency = "Saudi Riyal (SR)",
            language = "Arabic",
            mannerism = "Greet with a handshake, avoid public displays of affection, dress modestly.",
            visa = "https://www.saudiarabiavisa.com/",
            phrases = "Hello: مرحبا (Marhaba), Goodbye: وداعا (Wadaeaan), Thank you: شكرا (Shukran), Sorry: آسف (Aasif), No: لا (La)",
            tipping = "Tipping is not customary but may be appreciated in some cases.",
            when = "October to March (cooler temperatures)",
            foods = "Kabsa, Shawarma, Falafel, Hummus",
            links = "https://www.tripadvisor.com/Tourism-g293995-Saudi_Arabia-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Kenya",
            continent = "Africa",
            image = "/image/kenya.png",
            currency = "Kenyan Shilling (KES)",
            language = "Swahili, English",
            mannerism = "Greet with a handshake, dress modestly, avoid public displays of affection.",
            visa = "https://www.ecitizen.go.ke/",
            phrases = "Hello: Jambo, Goodbye: Kwaheri, Thank you: Asante, Sorry: Pole, No: Hapana",
            tipping = "10% in restaurants, rounding up taxi fares.",
            when = "January to February and June to September (dry seasons)",
            foods = "Ugali, Nyama Choma, Samosa, Pilau",
            links = "https://www.tripadvisor.com/Tourism-g294206-Kenya-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Egypt",
            continent = "Middle East",
            image = "/image/egypt.png",
            currency = "Egyptian Pound (EGP)",
            language = "Arabic",
            mannerism = "Greet with a handshake, dress modestly, respect cultural customs.",
            visa = "https://www.visa2egypt.gov.eg/",
            phrases = "Hello: مرحبا (Marhaba), Goodbye: وداعا (Wadaeaan), Thank you: شكرا (Shukran), Sorry: آسف (Aasif), No: لا (La)",
            tipping = "5-10% in restaurants, rounding up taxi fares.",
            when = "October to April (cooler temperatures)",
            foods = "Koshari, Ful Medames, Shawarma, Baklava",
            links = "https://www.tripadvisor.com/Tourism-g294200-Egypt-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Morocco",
            continent = "Middle East",
            image = "/image/morocco.png",
            currency = "Moroccan Dirham (MAD)",
            language = "Arabic, Berber",
            mannerism = "Greet with a handshake, dress modestly, respect cultural customs.",
            visa = "https://morocco.visahq.com/",
            phrases = "Hello: السلام عليكم (As-salamu alaykum), Goodbye: وداعا (Wadaeaan), Thank you: شكرا (Shukran), Sorry: آسف (Aasif), No: لا (La)",
            tipping = "10% in restaurants, rounding up taxi fares.",
            when = "March to May and September to November (pleasant weather)",
            foods = "Tagine, Couscous, Harira, Pastilla",
            links = "https://www.tripadvisor.com/Tourism-g293730-Morocco-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Venezuela",
            continent = "South America",
            image = "/image/venezuela.png",
            currency = "Venezuelan Bolívar (VES)",
            language = "Spanish",
            mannerism = "Greet with a handshake or hug, dress casually, respect personal space.",
            visa = "https://www.embassy-worldwide.com/country/venezuela/",
            phrases = "Hello: Hola, Goodbye: Adiós, Thank you: Gracias, Sorry: Lo siento, No: No",
            tipping = "10% in restaurants.",
            when = "December to April (dry season)",
            foods = "Arepas, Pabellón Criollo, Cachapas, Hallacas",
            links = "https://www.tripadvisor.com/Tourism-g294324-Venezuela-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Argentina",
            continent = "South America",
            image = "/image/argentina.png",
            currency = "Argentine Peso (ARS)",
            language = "Spanish",
            mannerism = "Greet with a kiss on the cheek, dress casually, avoid sensitive political topics.",
            visa = "https://www.migraciones.gov.ar/accesible/indexA.php?visas",
            phrases = "Hello: Hola, Goodbye: Adiós, Thank you: Gracias, Sorry: Lo siento, No: No",
            tipping = "10% in restaurants.",
            when = "March to May and September to November (pleasant weather)",
            foods = "Asado, Empanadas, Dulce de Leche, Milanesa",
            links = "https://www.tripadvisor.com/Tourism-g294266-Argentina-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Brazil",
            continent = "South America",
            image = "/image/brazil.png",
            currency = "Brazilian Real (BRL)",
            language = "Portuguese",
            mannerism = "Greet with a kiss on both cheeks, dress casually, avoid sensitive political topics.",
            visa = "https://www.vfsglobal.com/brazilglobal/",
            phrases = "Hello: Olá, Goodbye: Tchau, Thank you: Obrigado, Sorry: Desculpa, No: Não",
            tipping = "10% in restaurants.",
            when = "December to March (summer)",
            foods = "Feijoada, Pão de Queijo, Brigadeiro, Churrasco",
            links = "https://www.tripadvisor.com/Tourism-g294280-Brazil-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Colombia",
            continent = "South America",
            image = "/image/colombia.png",
            currency = "Colombian Peso (COP)",
            language = "Spanish",
            mannerism = "Greet with a handshake or kiss on the cheek, dress casually, avoid sensitive political topics.",
            visa = "https://www.cancilleria.gov.co/en/procedures_services/visas",
            phrases = "Hello: Hola, Goodbye: Adiós, Thank you: Gracias, Sorry: Lo siento, No: No",
            tipping = "10% in restaurants.",
            when = "December to March (dry season)",
            foods = "Arepas, Bandeja Paisa, Sancocho, Ajiaco",
            links = "https://www.tripadvisor.com/Tourism-g294073-Colombia-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Ecuador",
            continent = "South America",
            image = "/image/ecuador.png",
            currency = "United States Dollar (USD)",
            language = "Spanish",
            mannerism = "Greet with a handshake or kiss on the cheek, dress casually, respect personal space.",
            visa = "https://www.cancilleria.gob.ec/visas-2/",
            phrases = "Hello: Hola, Goodbye: Adiós, Thank you: Gracias, Sorry: Lo siento, No: No",
            tipping = "10% in restaurants.",
            when = "June to September (dry season)",
            foods = "Ceviche, Encebollado, Llapingachos, Hornado",
            links = "https://www.tripadvisor.com/Tourism-g294308-Ecuador-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "USA",
            continent = "North America",
            image = "/image/usa.png",
            currency = "United States Dollar (USD)",
            language = "English",
            mannerism = "Greet with a handshake, maintain personal space, dress casually.",
            visa = "https://travel.state.gov/content/travel/en/us-visas.html",
            phrases = "Hello: Hello, Goodbye: Goodbye, Thank you: Thank you, Sorry: Sorry, No: No",
            tipping = "15-20% in restaurants.",
            when = "Varies by region",
            foods = "Hamburgers, Hot Dogs, Apple Pie, Barbecue",
            links = "https://www.tripadvisor.com/Tourism-g191-United_States-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Canada",
            continent = "North America",
            image = "/image/canada.png",
            currency = "Canadian Dollar (CAD)",
            language = "English, French",
            mannerism = "Greet with a handshake, maintain personal space, dress casually.",
            visa = "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html",
            phrases = "Hello: Hello, Goodbye: Goodbye, Thank you: Thank you, Sorry: Sorry, No: No",
            tipping = "15-20% in restaurants.",
            when = "June to August (summer) and December to February (winter sports)",
            foods = "Poutine, Maple Syrup, Nanaimo Bars, Butter Tarts",
            links = "https://www.tripadvisor.com/Tourism-g153339-Canada-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Mexico",
            continent = "North America",
            image = "/image/mexico.png",
            currency = "Mexican Peso (MXN)",
            language = "Spanish",
            mannerism = "Greet with a handshake or hug, dress casually, avoid sensitive political topics.",
            visa = "https://www.inm.gob.mx/fmme/publico/en/solicitud.html",
            phrases = "Hello: Hola, Goodbye: Adiós, Thank you: Gracias, Sorry: Lo siento, No: No",
            tipping = "10-15% in restaurants.",
            when = "November to April (dry season)",
            foods = "Tacos, Enchiladas, Mole, Guacamole",
            links = "https://www.tripadvisor.com/Tourism-g150768-Mexico-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Dominican Republic",
            continent = "Central America and Carribean",
            image = "/image/dr.png",
            currency = "Dominican Peso (DOP)",
            language = "Spanish",
            mannerism = "Greet with a handshake or kiss on the cheek, dress casually, avoid sensitive political topics.",
            visa = "https://www.dgii.gov.do/Tturistaweb/",
            phrases = "Hello: Hola, Goodbye: Adiós, Thank you: Gracias, Sorry: Lo siento, No: No",
            tipping = "10% in restaurants.",
            when = "December to April (dry season)",
            foods = "Mangú, La Bandera, Sancocho, Tostones",
            links = "https://www.tripadvisor.com/Tourism-g147288-Dominican_Republic-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Puerto Rico",
            continent = "Central America and Carribean",
            image = "/image/pr.png",
            currency = "United States Dollar (USD)",
            language = "Spanish, English",
            mannerism = "Greet with a handshake or kiss on the cheek, dress casually, avoid sensitive political topics.",
            visa = "https://travel.state.gov/content/travel/en/us-visas.html",
            phrases = "Hello: Hola, Goodbye: Adiós, Thank you: Gracias, Sorry: Lo siento, No: No",
            tipping = "15-20% in restaurants.",
            when = "December to April (dry season)",
            foods = "Mofongo, Arroz con Gandules, Lechón, Alcapurrias",
            links = "https://www.tripadvisor.com/Tourism-g147319-Puerto_Rico-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Aruba",
            continent = "Central America and Carribean",
            image = "/image/aruba.png",
            currency = "Aruban Florin (AWG)",
            language = "Dutch, Papiamento",
            mannerism = "Greet with a handshake, dress casually, respect local customs.",
            visa = "https://www.aruba.com/us/plan-your-visit/getting-here/entry-requirements-visas",
            phrases = "Hello: Bon dia, Goodbye: Ayo, Thank you: Danki, Sorry: Sori, No: No",
            tipping = "10-15% in restaurants.",
            when = "April to August (off-peak season with good weather)",
            foods = "Keshi Yena, Pastechi, Funchi, Aruban Seafood",
            links = "https://www.tripadvisor.com/Tourism-g147247-Aruba-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Jamaica",
            continent = "Central America and Carribean",
            image = "/image/jamaica.png",
            currency = "Jamaican Dollar (JMD)",
            language = "English",
            mannerism = "Greet with a handshake, dress casually, avoid sensitive political topics.",
            visa = "https://www.jhcuk.org/visas",
            phrases = "Hello: Hello, Goodbye: Goodbye, Thank you: Thank you, Sorry: Sorry, No: No",
            tipping = "10-15% in restaurants.",
            when = "November to mid-December and January to March (dry season)",
            foods = "Jerk Chicken, Ackee and Saltfish, Callaloo, Patties",
            links = "https://www.tripadvisor.com/Tourism-g147309-Jamaica-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Bahamas",
            continent = "Central America and Carribean",
            image = "/image/bahamas.png",
            currency = "Bahamian Dollar (BSD)",
            language = "English",
            mannerism = "Greet with a handshake, dress casually, respect local customs.",
            visa = "https://www.bahamas.com/plan-your-trip/travel-updates",
            phrases = "Hello: Hello, Goodbye: Goodbye, Thank you: Thank you, Sorry: Sorry, No: No",
            tipping = "15% in restaurants.",
            when = "December to April (dry season)",
            foods = "Conch Fritters, Rock Lobsters, Bahamian Stew Fish, Johnnycakes",
            links = "https://www.tripadvisor.com/Tourism-g147414-Bahamas-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Australia",
            continent = "Oceania",
            image = "/image/australia.png",
            currency = "Australian Dollar (AUD)",
            language = "English",
            mannerism = "Greet with a handshake, dress casually, avoid sensitive political topics.",
            visa = "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder",
            phrases = "Hello: Hello, Goodbye: Goodbye, Thank you: Thank you, Sorry: Sorry, No: No",
            tipping = "Tipping is not customary but appreciated in restaurants.",
            when = "September to November (spring) and March to May (autumn)",
            foods = "Vegemite, Meat Pies, Pavlova, Lamingtons",
            links = "https://www.tripadvisor.com/Tourism-g255055-Australia-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "New Zealand",
            continent = "Oceania",
            image = "/image/newZealand.png",
            currency = "New Zealand Dollar (NZD)",
            language = "English, Maori",
            mannerism = "Greet with a handshake, respect the Maori culture and traditions, dress casually.",
            visa = "https://www.immigration.govt.nz/new-zealand-visas",
            phrases = "Hello: Kia ora, Goodbye: Haere rā, Thank you: Ngā mihi, Sorry: Aroha mai, No: Kāore",
            tipping = "Tipping is not customary but appreciated in restaurants.",
            when = "December to February (summer)",
            foods = "Hangi, Pavlova, Kiwi Burger, Fish and Chips",
            links = "https://www.tripadvisor.com/Tourism-g255104-New_Zealand-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Samoa",
            continent = "Oceania",
            image = "/image/samoa.png",
            currency = "Samoan Tala (WST)",
            language = "Samoan, English",
            mannerism = "Greet with a handshake, dress modestly, respect local customs.",
            visa = "https://www.samoa.travel/page/visas/",
            phrases = "Hello: Talofa, Goodbye: Tofa, Thank you: Fa'afetai, Sorry: Fa'amalie atu, No: Leai",
            tipping = "Tipping is not customary but appreciated.",
            when = "May to October (dry season)",
            foods = "Palusami, Oka, Faiai Eleni, Pisua",
            links = "https://www.tripadvisor.com/Tourism-g294137-Samoa-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Israel",
            continent = "Middle East",
            image = "/image/israel.png",
            currency = "Israeli New Shekel (ILS)",
            language = "Hebrew, Arabic",
            mannerism = "Greet with a handshake, dress modestly, respect religious customs.",
            visa = "https://www.gov.il/en/departments/Units/consular_services",
            phrases = "Hello: שלום (Shalom), Goodbye: להתראות (Lehitraot), Thank you: תודה (Toda), Sorry: סליחה (Slicha), No: לא (Lo)",
            tipping = "10-15% in restaurants.",
            when = "March to May and September to November (mild weather)",
            foods = "Falafel, Hummus, Shakshuka, Sabich",
            links = "https://www.tripadvisor.com/Tourism-g293977-Israel-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Oman",
            continent = "Middle East",
            image = "/image/oman.png",
            currency = "Omani Rial (OMR)",
            language = "Arabic",
            mannerism = "Greet with a handshake, dress modestly, respect local customs.",
            visa = "https://evisa.rop.gov.om/",
            phrases = "Hello: مرحبا (Marhaba), Goodbye: وداعا (Wadaeaan), Thank you: شكرا (Shukran), Sorry: آسف (Aasif), No: لا (La)",
            tipping = "10% in restaurants.",
            when = "October to April (cooler temperatures)",
            foods = "Shuwa, Majboos, Mashuai, Halwa",
            links = "https://www.tripadvisor.com/Tourism-g294006-Oman-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "South Africa",
            continent = "Africa",
            image = "/image/southAfrica.png",
            currency = "South African Rand (ZAR)",
            language = "Afrikaans, English",
            mannerism = "Greet with a handshake, avoid sensitive political topics, respect cultural diversity.",
            visa = "http://www.dha.gov.za/index.php/countries-exempt-from-sa-visas",
            phrases = "Hello: Hallo, Goodbye: Totsiens, Thank you: Dankie, Sorry: Jammer, No: Nee",
            tipping = "10-15% in restaurants, rounding up taxi fares.",
            when = "Spring (September to November) and Autumn (March to May)",
            foods = "Braai (BBQ), Bobotie, Biltong, Bunny Chow",
            links = "https://www.tripadvisor.com/Tourism-g293740-South_Africa-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Zimbabwe",
            continent = "Africa",
            image = "/image/zimbabwe.png",
            currency = "Zimbabwean Dollar (ZWL)",
            language = "English, Shona, Ndebele",
            mannerism = "Greet with a handshake, dress modestly, respect local customs.",
            visa = "https://www.evisa.gov.zw/",
            phrases = "Hello: Mhoro, Goodbye: Sara zvakanaka, Thank you: Ndatenda, Sorry: Ndineurombo, No: Kwete",
            tipping = "10% in restaurants.",
            when = "May to October (dry season)",
            foods = "Sadza, Biltong, Mapopo Candy, Nyama",
            links = "https://www.tripadvisor.com/Tourism-g293759-Zimbabwe-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Tanzania",
            continent = "Africa",
            image = "/image/tanzania.png",
            currency = "Tanzanian Shilling (TZS)",
            language = "Swahili, English",
            mannerism = "Greet with a handshake, dress modestly, respect local customs.",
            visa = "https://eservices.immigration.go.tz/visa/",
            phrases = "Hello: Jambo, Goodbye: Kwaheri, Thank you: Asante, Sorry: Pole, No: Hapana",
            tipping = "10% in restaurants.",
            when = "June to October (dry season)",
            foods = "Ugali, Nyama Choma, Samosa, Pilau",
            links = "https://www.tripadvisor.com/Tourism-g293747-Tanzania-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Madagascar",
            continent = "Africa",
            image = "/image/madagascar.png",
            currency = "Malagasy Ariary (MGA)",
            language = "Malagasy, French",
            mannerism = "Greet with a handshake, dress modestly, respect local customs.",
            visa = "https://www.madagascar-consulate.org/visa",
            phrases = "Hello: Salama, Goodbye: Veloma, Thank you: Misaotra, Sorry: Azafady, No: Tsia",
            tipping = "10% in restaurants.",
            when = "April to October (dry season)",
            foods = "Ravitoto, Romazava, Koba, Mofo Anana",
            links = "https://www.tripadvisor.com/Tourism-g293808-Madagascar-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Chile",
            continent = "South America",
            image = "/image/chile.png",
            currency = "Chilean Peso (CLP)",
            language = "Spanish",
            mannerism = "Greet with a handshake or kiss on the cheek, dress casually, avoid sensitive political topics.",
            visa = "https://tramites.minrel.gov.cl/",
            phrases = "Hello: Hola, Goodbye: Adiós, Thank you: Gracias, Sorry: Lo siento, No: No",
            tipping = "10% in restaurants.",
            when = "September to November (spring) and March to May (autumn)",
            foods = "Empanadas, Pastel de Choclo, Asado, Curanto",
            links = "https://www.tripadvisor.com/Tourism-g294291-Chile-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Philippines",
            continent = "Asia",
            image = "/image/philippines.png",
            currency = "Philippine Peso (PHP)",
            language = "Filipino, English",
            mannerism = "Greet with a handshake, dress modestly, respect local customs.",
            visa = "https://www.dfa.gov.ph/list-of-countries-for-21-day-visa",
            phrases = "Hello: Kamusta, Goodbye: Paalam, Thank you: Salamat, Sorry: Paumanhin, No: Hindi",
            tipping = "10% in restaurants.",
            when = "November to April (dry season)",
            foods = "Adobo, Sinigang, Lechon, Halo-Halo",
            links = "https://www.tripadvisor.com/Tourism-g294245-Philippines-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Maldives",
            continent = "Asia",
            image = "/image/maldives.png",
            currency = "Maldivian Rufiyaa (MVR)",
            language = "Dhivehi",
            mannerism = "Greet with a handshake, dress modestly, respect local customs and religious practices.",
            visa = "https://immigration.gov.mv/tourist-visa/",
            phrases = "Hello: Assalaamu Alaikum, Goodbye: Dhanee, Thank you: Shukuriyaa, Sorry: Ma-aaf, No: Noon",
            tipping = "10-15% in restaurants.",
            when = "November to April (dry season)",
            foods = "Garudhiya, Mas Huni, Fihunu Mas, Bajiya",
            links = "https://www.tripadvisor.com/Tourism-g293953-Maldives-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Jordan",
            continent = "Middle East",
            image = "/image/jordan.png",
            currency = "Jordanian Dinar (JOD)",
            language = "Arabic",
            mannerism = "Greet with a handshake, dress modestly, respect local customs and religious practices.",
            visa = "https://www.visitjordan.gov.jo/",
            phrases = "Hello: مرحبا (Marhaba), Goodbye: وداعا (Wadaeaan), Thank you: شكرا (Shukran), Sorry: آسف (Aasif), No: لا (La)",
            tipping = "10% in restaurants.",
            when = "March to May (spring) and September to November (autumn)",
            foods = "Mansaf, Falafel, Hummus, Kunafa",
            links = "https://www.tripadvisor.com/Tourism-g293985-Jordan-Vacations.html"
            )
        
        countries.append(c)

        c = Countries(
            name = "Turkey",
            continent = "Middle East",
            image = "/image/turkey.png",
            currency = "Turkish Lira (TRY)",
            language = "Turkish",
            mannerism = "Greet with a handshake, dress modestly, respect local customs.",
            visa = "https://www.evisa.gov.tr/en/",
            phrases = "Hello: Merhaba, Goodbye: Hoşçakal, Thank you: Teşekkür ederim, Sorry: Özür dilerim, No: Hayır",
            tipping = "10% in restaurants.",
            when = "April to May and September to October (mild weather)",
            foods = "Kebabs, Baklava, Meze, Dolma",
            links = "https://www.tripadvisor.com/Tourism-g293969-Turkey-Vacations.html"
            )







        countries.append(c)

        db.session.add_all(countries)
        db.session.commit()

        print("Seeding complete!")