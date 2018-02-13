var storyContent = ﻿{"inkVersion":17,"root":[{"->":"StartingPreface"},"done",{"StartingPreface":[{"->":".^.Welcome"},{"Welcome":["^Welcome to weary adventure to <i>DISCOVERING CANIS VILLA</i>! This storyline takes place in the Starting Zone of Regio Scientiae.","\n",{"->":".^.^.StartMenu"},{"#f":3}],"Instructions":[["ev","str","^First time visitors PRESS START on the next page, all others may choose CONTINUE.","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":".^.^.^.^.StartMenu"},"\n",{"#f":7}]}],{"#f":3}],"StartMenu":[["ev","str","^PRESS START","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":"CaldaVale.Scene"},"\n","done",{"#f":7}]}],{"#f":3}],"#f":3}],"SleepingJedi":[["ev","str","^Jedi Master Scoy has fallen asleep again. This area is under development, check back again later.","/str","/ev",{"*":".^.c","flg":4},{"c":["\n","\n",{"->":"CaldaVale.Scene"},"done",{"#f":7}]}],{"#f":3}],"CaldaVale":[{"->":".^.Scene"},{"Scene":["^<b>DISCOVERING CANIS VILLA</b>","\n","^The sun is just peaking over the horizon. You wake up disheveled in the woods. You are without food and few other possessions. You feel ",["G>",["ev","visit",3,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^cold",{"->":".^.^.23"},null],"s1":["pop","^hot",{"->":".^.^.23"},null],"s2":["pop","^sweaty",{"->":".^.^.23"},null],"#f":5}],"G<",null],"^, have ",["G>",["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^an aching head",{"->":".^.^.17"},null],"s1":["pop","^sore ribs",{"->":".^.^.17"},null],"#f":5}],"G<",null],"^, covered in sparkling blue dust, and at the moment completely alone.","\n",["ev","str","^Stumble out into a path and start walking","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":".^.^.^.^.path"},"\n",{"#f":7}]}],["ev",{"^->":"CaldaVale.Scene.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":2},{"s":["^Sit tight and wait for help",{"->":"$r","var":true},null],"c":["ev",{"^->":"CaldaVale.Scene.9.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n","\n",{"->":".^.^.^.^.wait_for_help"},{"#f":7}]}],{"#f":3}],"wait_for_help":["^After a few hours, no one comes along. Its only getting hotter and your stomach more empty. It would seem no hero or heroine will be rescuing you.","\n",["ev",{"^->":"CaldaVale.wait_for_help.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":2},{"s":["^You finally get up and start walking.",{"->":"$r","var":true},null],"c":["ev",{"^->":"CaldaVale.wait_for_help.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n","\n",{"->":".^.^.^.^.path"},{"#f":7}]}],{"#f":3}],"path":["^Once you get your footing on the path, its an easy walk. You travel less than ",["G>",["ev","visit",3,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^a quarter-mile",{"->":".^.^.23"},null],"s1":["pop","^a mile",{"->":".^.^.23"},null],"s2":["pop","^two miles",{"->":".^.^.23"},null],"#f":5}],"G<",null],"^ before coming to a crossroads.","\n","^An overgrown single-track trail snakes westwards towards a dark foreboding tower. Probably less than a day's march. To the east, a well worn path cuts through the forest.","\n",{"->":".^.^.crossroads"},{"#f":3}],"crossroads":[["ev","str","^Head east on the forest path","/str",{"CNT?":"ForestDeath.Ambush"},"!","/ev",{"*":".^.c","flg":5},{"c":["\n",{"->":"ForestDeath.Ambush"},"\n",{"#f":7}]}],["ev","str","^Head east on the forest path...","/str",{"CNT?":"ClunCastle.early"},{"CNT?":"ForestDeath.Ambush"},"&&","/ev",{"*":".^.c","flg":5},{"c":["\n",{"->":".^.^.^.^.path_east"},"\n",{"#f":7}]}],["ev","str","^Trek west to the dark tower","/str",{"CNT?":"ClunCastle.early"},"!","/ev",{"*":".^.c","flg":5},{"c":["\n",{"->":"ClunCastle.early"},"\n",{"#f":7}]}],{"#f":3}],"path_east":["^Not long after midday a friendly farmer offers you a ride in his ",["G>",["ev","visit",3,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^turnip",{"->":".^.^.23"},null],"s1":["pop","^carrot",{"->":".^.^.23"},null],"s2":["pop","^potato",{"->":".^.^.23"},null],"#f":5}],"G<",null],"^ cart towards the nearest village.","\n","^The forest comes to a clearing and opens to village.","\n",["ev","str","^Go towards the village","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":"CanisVilla"},"\n",{"#f":7}]}],{"#f":3}],"#f":3}],"CanisVilla":[{"->":".^.Scene"},{"Scene":["^A small village lies before you. The village center is loosely surrounded by a variety of stout timbered buildings. You are greeted by a weathered signpost <i>Canis Villa</i>.","\n","end",{"#f":3}],"#f":3}],"ClunCastle":[{"->":".^.scene"},{"scene":["^Stones have fallen and the place is clearly abandoned.","\n","done",{"#f":3}],"early":["^Besides the occasional bushwhacking the walk isn't too difficult and soon you approach the dark tower’s main gate.","\n","^Stones have fallen around it.","\n",["ev","str","^The place is clearly abandoned.","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":".^.^.^.^.CastleDeath"},"\n",{"#f":7}]}],{"#f":3}],"CastleDeath":["^At least you <i>thought</i> it was abandoned. The Drow warrior slips from a shadowy side entrance.","\n",["ev","str","^Fight","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":".^.^.^.^.Fight"},"\n",{"#f":7}]}],["ev","str","^Flee","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":".^.^.^.^.Fight"},"\n",{"#f":7}]}],{"#f":3}],"Fight":["^Blades move so fast they are a blur. You have no time to react. This quickly ends your otherwise pleasant walk.","\n",["ev","str","^Next","/str",{"CNT?":"Death"},1,"<","/ev",{"*":".^.c","flg":5},{"c":["\n",{"->":"Death.One"},"\n",{"#f":7}]}],["ev","str","^Next","/str",{"CNT?":"Death"},"/ev",{"*":".^.c","flg":5},{"c":["\n",{"->":"Death.Two"},"\n","done",{"#f":7}]}],{"#f":3}],"#f":3}],"ForestDeath":[{"->":".^.Ambush"},{"Ambush":["^You walk a ways down the forest path. A short while later a group of bandits rushes out onto the path. They are dressed in gray colored clothing with red bandanas. Most of them are wielding daggers or short swords.  Perhaps if you had a weapon of some sort OR special training you might stand a chance. Unfortunately you have neither.","\n",["ev","str","^Fight","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":".^.^.^.^.Fight"},"\n",{"#f":7}]}],["ev","str","^Flee","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":".^.^.^.^.Flee"},"\n",{"#f":7}]}],{"#f":3}],"Fight":["^You attempt hand-to-hand combat, but you're no match for them.","\n",["ev","str","^Next","/str",{"CNT?":"Death"},1,"<","/ev",{"*":".^.c","flg":5},{"c":["\n",{"->":"Death.One"},"\n",{"#f":7}]}],["ev","str","^Next","/str",{"CNT?":"Death"},"/ev",{"*":".^.c","flg":5},{"c":["\n",{"->":"Death.Two"},"\n","done",{"#f":7}]}],{"#f":3}],"Flee":["^You attempt to flee, but you are caught. You're no match for them.","\n",["ev","str","^Next","/str",{"CNT?":"Death"},1,"<","/ev",{"*":".^.c","flg":5},{"c":["\n",{"->":"Death.One"},"\n",{"#f":7}]}],["ev","str","^Next","/str",{"CNT?":"Death"},"/ev",{"*":".^.c","flg":5},{"c":["\n",{"->":"Death.Two"},"\n","done",{"#f":7}]}],{"#f":3}],"#f":3}],"Death":[{"->":".^.One"},{"One":["^You have died, but do not fear failure. Kind paladins and clerics wander these lands. Soon enough your bones will be found and your life renewed.","\n",["ev","str","^Res","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":"CaldaVale.Scene"},"\n",{"#f":7}]}],{"#f":3}],"Two":["^You have died <i>yet again</i>, but do not fear failure. You are demostrating PERSISTENCE and GRIT. Kind paladins and clerics wander these lands. Soon enough your bones will be found and your life renewed.","\n",["ev","str","^Res","/str","/ev",{"*":".^.c","flg":4},{"c":["\n",{"->":"CaldaVale.Scene"},"\n",{"#f":7}]}],{"#f":3}],"Eastport_laser_fish":["^<i>Jedi Master Scoy has fallen asleep again. This area is under development, check back again later.","\n","done",{"#f":3}],"#f":3}],"#f":3}],"listDefs":{}};