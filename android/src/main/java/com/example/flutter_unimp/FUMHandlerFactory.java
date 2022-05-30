package com.example.flutter_unimp;

import android.content.Context;
import android.util.Log;

import com.example.flutter_unimp.util.Env;
import com.example.flutter_unimp.util.Constants;

import java.util.ArrayList;
import java.util.List;

import io.dcloud.feature.sdk.DCSDKInitConfig;
import io.dcloud.feature.sdk.DCUniMPSDK;
import io.dcloud.feature.sdk.MenuActionSheetItem;
import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel;

public class FUMHandlerFactory {

  private Context _context;

  public void dispatchMethodHandler(Context context, MethodCall call, MethodChannel.Result result) {
    if (null == call) {
      return;
    }
    _context = context;

    String methodId = call.method;
    if (Env.DEBUG) {
      Log.d("MMapHandlerFactory", "dispatchMethodHandler: " + methodId);
    }
    switch (methodId) {
      case Constants.FUMStateMethodId.openMinimp:
        openMinimp(call, result);
    }
  }

  private void openMinimp(MethodCall call, MethodChannel.Result result) {

    // 接收 Flutter 传入的参数
    String argumentAppID = call.argument("AppID");
    // 设置右上角胶囊操作菜单
    MenuActionSheetItem item = new MenuActionSheetItem("关于", "about");
    List<MenuActionSheetItem> sheetItems = new ArrayList();
    sheetItems.add(item);
    // 初始化uniMPSDK
    DCSDKInitConfig config =
        new DCSDKInitConfig.Builder()
            .setCapsule(true)
            .setMenuDefFontSize("16px")
            .setMenuDefFontColor("#2D2D2D")
            .setMenuDefFontWeight("normal")
            .setMenuActionSheetItems(sheetItems)
            .build();
    DCUniMPSDK.getInstance().initialize(_context, config);

    try {
      // 打开小程序
      DCUniMPSDK.getInstance().openUniMP(_context, argumentAppID);
      DCUniMPSDK.getInstance()
          .setDefMenuButtonClickCallBack(
              (appid, id) -> {
                switch (id) {
                  case "gy":
                    {
                      Log.e("unimp", "点击了关于" + appid);
                      break;
                    }
                }
              });

      // 监听小程序关闭
      DCUniMPSDK.getInstance()
          .setUniMPOnCloseCallBack(
              (id) -> {
                Log.e("unimp", id + "被关闭了");
              });
      result.success(true);
    } catch (Exception e) {
      e.printStackTrace();
      result.error("error", "开启失败", "0");
    }
  }
}
