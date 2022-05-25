#import "FlutterUnimpPlugin.h"
#if __has_include(<flutter_unimp/flutter_unimp-Swift.h>)
#import <flutter_unimp/flutter_unimp-Swift.h>
#else
// Support project import fallback if the generated compatibility header
// is not copied when this plugin is created as a library.
// https://forums.swift.org/t/swift-static-libraries-dont-copy-generated-objective-c-header/19816
#import "flutter_unimp-Swift.h"
#endif

@implementation FlutterUnimpPlugin
+ (void)registerWithRegistrar:(NSObject<FlutterPluginRegistrar>*)registrar {
  [SwiftFlutterUnimpPlugin registerWithRegistrar:registrar];
}
@end
