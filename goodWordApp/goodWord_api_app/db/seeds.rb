# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Article.create([
    {
        "title": "Man Who Can’t Stop Eating Asparagus Turns Green",
        "author": "Aspen FitzGerald-Dorsey",
        "author_title": "The Good Word Staff Writer",
        "description": "His yoga students noticed that his face was not its usual red when he was entering the twentieth minute of his patented Inverted Gus-Stand. Though the blood was rushing to his head, his face was a dull green. It turns out that the green hue of his skin may actually be a sign that Gus is close to achieving vegetarian enlightenment.",
        "main_quote": "'I am proud to report that I have embraced my inner vegetarian, started a leafy meditation practice and would like to invite our readership to become disciples of Gus. He will change your life and his pee smells amazing.'",
        "category": "Science",
        "content": "“Do I look chartreuse to you?” Asks Gus, a twenty-three-year-old yogi as we wait for our matcha lattes in his favorite Brooklyn cafe. “My lady says I look chartreuse,” he squints at me, “But I think it’s more of a minty hue.” Apparently, his yoga students noticed that his face was not its usual red when he was entering the twentieth minute of his patented Inverted Gus-Stand. Though the blood was rushing to his head, his face was a dull green. “One of the disciples pulled me out of my Gus-Stand and took my vitals. She’s an EMT. I think everything would have been fine once I folded my chakras into position. But some people just stir up drama, saving lives wherever they go!”

        When asked for his last name at the hospital, he allegedly replied, “Just ‘Gus’ man.” So the green man’s true identity is still a mystery. Over matcha, Gus admitted that he has been experimenting with being Ketotarian for the past three months. His green routine starts with an asparagus smoothie and pea protein supplement before sunrise yoga. He follows it up with a lunch frittata of spinach and asparagus. For dinner, he has a sensible three cups of steamed asparagus, washed down with a gallon of asparagus-infused water mixed with blue-green algae. The hospital refused to comment on the diagnosis of a patient, but a yoga student told me that to reach nirvana, Gus has told them to set intentions to become one with their spirit vegetables. Beetroota wished to remain anonymous. I told her it that it would be my pleasure to only use the name she gave me, which could not possibly be anyone’s government name. So, it turns out that the green hue of his skin may actually be a sign that Gus is close to achieving vegetarian enlightenment.
        
        “I live for my post-sunset yoga dessert,” Gus grabs my face with two very green hands, “If you have never indulged in a kiwi-asparagus vegan gelatin sweetened with stevia, you have not lived!” I try to smile, but he refuses to let go until I agree to attend his next yoga class. When he is finished, I slurp the last of my latte and start to sweat at the thought of folding my chakras. Pleasantly, I was surprised to find that tree pose can lead to a yearning for Swiss chard. After a week of daily yoga with Gus, I am proud to report that I have embraced my inner vegetarian, started a leafy meditation practice and would like to invite our readership to become disciples of Gus. He will change your life and his pee smells amazing.",
        "img_url": "https://images.unsplash.com/photo-1555704574-f9ecf4717298?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
    },

    {
        "title": "Road Construction on Electric Ave Causes Civil Unrest",
        "author": "Christopher Dowda",
        "author_title": "The Good Word Staff Writer",
        "description": "Electric Avenue has become a hotspot of controversy following the State's decision to perform construction on it. Built in 1982, Electric Avenue is was constructed as an expressway to the upper city with no delay, but recent events have made it a sprawling dystopian nightmare.",
        "main_quote": "'Look here, despite California taxing most of its population into poverty we just don't have the funding right now to run these crews. So construction is just going to be indefinite. Now if you'll excuse me I need to take my chopper up to Sactemento,' said Mayor Smoretaxes",
        "category": "Politics",
        "content": "Electric Avenue has become a hotspot of controversy following the State's decision to perform construction on it. Built in 1982, Electric Avenue is was constructed as an expressway to the upper city with no delay, but recent events have made it a sprawling dystopian nightmare.

        We spoke with Eddy Grant, a member of the local community. 'We used to be able to rock right down to Electric Avenue, but now it's a nightmare. They have it down to one lane and the delays are headache,'' says Eddy. He further remarked 'out in the daytime, out in the nighttime, you still can't get higher.' Eddy is just one of many impacted by this road construction, and the civil unrest is growing by the day, many feel that the expressway did not even need roadwork.
        
        We sought out an interview with Mayor Kneed Smoretaxes to ask why the city planning commission made this decision in the first place. 'Well this is California, we got funding from the State if we took 4 of our most used roads and put them under construction at the same time. It's roads like SB110 the 'stairway to heaven' as well.' Says Smoretaxes. Mayor Smoretaxes has recently come under scrutiny, as many say this road construction makes toll roads more favorable. 'Well taxes from those (toll) roads are hard at work tearing apart and rebuilding our perfectly good service streets.' The Mayor commented. Road construction began 5 years ago, and many fear it will never be completed. 'Look here, despite California taxing most of its population into poverty we just don't have the funding right now to run these crews. So construction is just going to be indefinite. Now if you'll excuse me I need to take my chopper up to Sactemento,' and with that Mayor Smoretaxes cut our interview short to campaign for the banning of smores as he say they violate CA's EPA laws.",
        "img_url": "https://images.unsplash.com/photo-1460533078824-f51edbff2726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
    },

    {
        "title": "Ed’s Bread Puddin’",
        "author": "",
        "author_title": "",
        "description": "",
        "main_quote": "",
        "category": "",
        "content": "",
        "img_url": ""
    },

    {
        "title": "",
        "author": "",
        "author_title": "",
        "description": "",
        "main_quote": "",
        "category": "",
        "content": "",
        "img_url": ""
    }
])

Recipe.create([
    {
        "title": "Ed’s Bread Puddin’",
        "author": "Edward French",
        "author_title": "The Good Word Head Chef",
        "description": "A little somethin' buttery, fluffy and sweet to satisfy that sweet tooth you've been nursing.",
        "ingredients": "2 ½ to 3 cups milk
        ¼ cup butter or somethin’ like butter
        2 eggs, lightly beaten, perhaps slapped around a bit, but not too bad, on second thought just beat them lightly
        ½ cup sugar
        ½ tablespoon vanilla, more or less, I like more
        1 teaspoon cinnamon
        1 teaspoon nutmeg
        ¼ teaspoon salt, no more, salt isn’t supposed to be good for you. Pepper is NOT a good substitute.
        4 to 5 cups dry bread crumbs
        ½ cup raisins, dates, nuts or some such confections, the choice is all yours",
        "category": "Recipes",
        "content": "Heat oven to round ‘bout 350°. Mix eggs, sugar, cinnamon, and salt in a big enough bowl (I usually get a bowl that’s too small and then I have more dishes to do) Stir in bread crumbs (and confections if’in you plan on using them). Put the bowl aside (you’ll need it later). Heat milk and butter (or somethin’ like butter) until butter is melted and the milk is scalded, pour into the bowl of bread crumbs and other stuff (it should still be in the bowl you set aside earlier), mix well, but don’t use your hand, the milk and butter is hot., use a fork or spoon or whatever you usually use to mix things, personally I have my favorite fork. Pour this mixture into an ungreased 1 ½ quart casserole dish, sprinkle with nutmeg (remove the mixing thingie if you haven’t already). Place the casserole dish in a pan of very hot water, rouns’bout 1 inch deep.
        Bake uncovered for 45ish minutes or until the top crust is a golden brown (more of a beige really).
        Serve warm, or cold, or with cream or milk or however you prefer it.
        ENJOY.",
        "img_url": "https://cdn.pixabay.com/photo/2015/03/21/17/03/bread-pudding-683918_960_720.jpg"
    },

    {
        "title": "",
        "author": "",
        "author_title": "",
        "description": "",
        "ingredients": "",
        "category": "",
        "content": "",
        "img_url": ""
    },

    {
        "title": "",
        "author": "",
        "author_title": "",
        "description": "",
        "ingredients": "",
        "category": "",
        "content": "",
        "img_url": ""
    },

    {
        "title": "",
        "author": "",
        "author_title": "",
        "description": "",
        "ingredients": "",
        "category": "",
        "content": "",
        "img_url": ""
    }
])