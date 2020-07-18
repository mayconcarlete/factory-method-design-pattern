# Factory Method Design Pattern

I made this repository to explain in a easy way how the factory method design pattern works.

We created two class called Warrior and Sorcerer that inherance a class called Human, who have an atributes like name, health, maxHealth and one method called displayInfo.

Warrior and Sorcerer have two methods, getMainSkill and setNewSkillLvl.

Then we create a class called VocationFactory who have a method called createCharacter that will be responsible to instantiate and return one of those class depending of arguments.

Lastly we just instantiate this factory in index.ts and created our characters.

![alt text](https://user-images.githubusercontent.com/6265325/87853417-2bb91200-c8e0-11ea-8274-af4156670409.png)

