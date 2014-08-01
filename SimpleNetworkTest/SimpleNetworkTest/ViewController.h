//
//  ViewController.h
//  SimpleNetworkTest
//
//  Created by Chris Foo on 7/31/14.
//  Copyright (c) 2014 Chris Foo. All rights reserved.
//
//  Implements the test to check network reachability using
//  http://stackoverflow.com/questions/1083701/how-to-check-for-an-active-internet-connection-on-iphone-sdk
//  Uses https://github.com/tonymillion/Reachability

#import <UIKit/UIKit.h>
#import "Reachability.h"

@interface ViewController : UIViewController
{
    IBOutlet UILabel *mLabel;
    IBOutlet UIButton *mButton;
    
    Reachability *internetReachable;
}
@end
