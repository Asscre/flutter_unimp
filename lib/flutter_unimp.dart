import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_unimp/fum_method_channel_handler.dart';
import 'package:flutter_unimp/fum_method_id.dart';

class FlutterUnimp {
  static FlutterUnimp? _instance;

  factory FlutterUnimp() => _instance ??= FlutterUnimp._();

  FlutterUnimp._() {
    _init();
  }

  late MethodChannel _methodChannel;
  late FUMMethodChannelHandler _fumMethodChannelHandler;

  void _init() {
    _methodChannel = const MethodChannel('flutter_unimp');
    _fumMethodChannelHandler = FUMMethodChannelHandler();
    _methodChannel.setMethodCallHandler(_handlerMethod);
  }

  /// flutter -> native
  ///
  /// 打开小程序
  Future<bool> openMinimp(String appId) async {
    bool result = false;
    try {
      result = (await _methodChannel
          .invokeMethod(FUMFToNMethodId.openMinimp, {'appId': appId})) as bool;
    } on PlatformException catch (e) {
      debugPrint(e.toString());
    }
    return result;
  }

  /// 小程序代理回调
  ///
  /// native -> flutter
  Future<dynamic> _handlerMethod(MethodCall call) async {
    debugPrint('_handlerMethod: ${call.method}');
    return await _fumMethodChannelHandler.handlerMethod(call);
  }
}
