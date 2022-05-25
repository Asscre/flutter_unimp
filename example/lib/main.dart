import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final List<BTNWidgetClass> _btnList = [
    BTNWidgetClass(
        title: 'uView',
        subtitle: 'uView UI，是 uni-app 生态优秀的 UI 框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水',
        func: () {}),
    BTNWidgetClass(
        title: 'hello-uniapp',
        subtitle: '演示 uni-app 框架的组件、接口、模板等',
        func: () {}),
  ];

  @override
  void initState() {
    super.initState();
  }

  // #2A8C82
  // #41BFB3
  // #9BF2EA
  // #275950
  // #260101

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('FlutterUnimp'),
          centerTitle: true,
          backgroundColor: const Color(0xFF2A8C82),
        ),
        body: ListView.builder(
          padding: const EdgeInsets.only(top: 30),
          itemCount: _btnList.length,
          itemBuilder: (BuildContext context, int i) {
            return _btnWidget(_btnList[i]);
          },
        ),
      ),
    );
  }

  Widget _btnWidget(BTNWidgetClass d) {
    return GestureDetector(
      onTap: d.func,
      child: Stack(
        children: [
          Center(
            child: Container(
              width: 360,
              height: 150,
              margin: const EdgeInsets.only(bottom: 20),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(24),
                boxShadow: [
                  BoxShadow(
                    color: const Color(0xFF41BFB3).withOpacity(0.2),
                    offset: const Offset(2, 6),
                    blurRadius: 10,
                    spreadRadius: 2,
                  )
                ],
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                      d.title,
                      style: const TextStyle(
                          fontSize: 30, color: Color(0xFF260101)),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                      d.subtitle,
                      style: const TextStyle(
                          fontSize: 16, color: Color(0xFF41BFB3)),
                    ),
                  ),
                ],
              ),
            ),
          ),
          const Positioned(
            top: 20,
            right: 30,
            child: Icon(
              Icons.arrow_forward_outlined,
              color: Color(0xFF275950),
            ),
          ),
        ],
      ),
    );
  }
}

class BTNWidgetClass {
  final String title;
  final String subtitle;
  final Function() func;

  BTNWidgetClass(
      {required this.title, required this.subtitle, required this.func});
}
