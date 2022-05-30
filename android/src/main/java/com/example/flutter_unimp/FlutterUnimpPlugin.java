package com.example.flutter_unimp;

import android.content.Context;

import androidx.annotation.NonNull;

import io.flutter.embedding.engine.plugins.FlutterPlugin;
import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel;
import io.flutter.plugin.common.MethodChannel.MethodCallHandler;
import io.flutter.plugin.common.MethodChannel.Result;

/** FlutterUnimpPlugin */
public class FlutterUnimpPlugin implements FlutterPlugin, MethodCallHandler {
  /// The MethodChannel that will the communication between Flutter and native Android
  ///
  /// This local reference serves to register the plugin with the Flutter Engine and unregister it
  /// when the Flutter Engine is detached from the Activity
  private MethodChannel channel;
  private FUMHandlerFactory fumHandlerFactory;
  private Context _context;

  @Override
  public void onAttachedToEngine(@NonNull FlutterPluginBinding flutterPluginBinding) {
    channel = new MethodChannel(flutterPluginBinding.getBinaryMessenger(), "flutter_unimp");
    channel.setMethodCallHandler(this);

    _context = flutterPluginBinding.getApplicationContext();
    fumHandlerFactory = new FUMHandlerFactory();
  }

  @Override
  public void onMethodCall(@NonNull MethodCall call, @NonNull Result result) {
    fumHandlerFactory.dispatchMethodHandler(_context, call, result);
    //    if (call.method.equals("getPlatformVersion")) {
    //      result.success("Android " + android.os.Build.VERSION.RELEASE);
    //    } else {
    //      result.notImplemented();
    //    }
  }

  @Override
  public void onDetachedFromEngine(@NonNull FlutterPluginBinding binding) {
    channel.setMethodCallHandler(null);
  }
}
