package com.lululutx.oop;

//java--->class
public class Person1 {
    //一个类如果什么都不写，它也会存在一个方法，就算构造器。

    String name;

    //实例化初始值
    //1.使用new关键字必须要有构造器
    //2.用来初始化值
    public Person1(){
    }

    //有参构造：一旦定义了有参构造，无参就必须显式定义
    public Person1(String name){
        this.name = name;
    }

    //构造器：
    //1.构造器方法名和类名相同
    //2.没有返回值
    //作用：
    //1.new 本质在调用构造方法
    //2.初始化对象的值
    //注意点：
    //1。定义有参构造后，如果想调用无参构造，必须显式的定义一个无参构造

//    Alt + Insert
}




/*
//定义一个项目应该只存在一个main方法
public class Application {
    public static void main(String[] args) {
        //使用new关键字实例化一个对象
        Person1 person1 = new Person1("销户");

        System.out.println(person1.name);//null
    }
}
*/
