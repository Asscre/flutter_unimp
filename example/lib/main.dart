import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_unimp/flutter_unimp.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  late List<BTNWidgetClass> _btnList;

  late FlutterUnimp _flutterUnimp;

  @override
  void initState() {
    super.initState();
    _flutterUnimp = FlutterUnimp();
    _btnList = [
      BTNWidgetClass(
        title: 'uView',
        subtitle: 'uView UI，是 uni-app 生态优秀的 UI 框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水',
        func: () => openApp('__UNI__F87B0CE'),
      ),
      BTNWidgetClass(
        title: 'hello-uniapp',
        subtitle: '演示 uni-app 框架的组件、接口、模板等',
        func: () => openApp('__UNI__3BC70CE'),
      ),
    ];
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

  void openApp(String appID) async {
    try {
      // 通过渠道，调用原生代码代码的方法
      final future = await _flutterUnimp.openMinimp(appID);
      // 打印执行的结果
      debugPrint(future.toString());
    } on PlatformException catch (e) {
      debugPrint(e.toString());
    }
  }
}

class BTNWidgetClass {
  final String title;
  final String subtitle;
  final Function() func;

  BTNWidgetClass(
      {required this.title, required this.subtitle, required this.func});
}
