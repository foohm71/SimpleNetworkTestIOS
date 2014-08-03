//
//  ViewController.m
//  SimpleNetworkTest
//
//  Created by Chris Foo on 7/31/14.
//  Copyright (c) 2014 Chris Foo. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)testRun:(id)sender
{
    mLabel.text = @"Hello";
    
    internetReachable = [Reachability reachabilityWithHostname:@"www.amazon.com"];
    
    // Internet is reachable
    internetReachable.reachableBlock = ^(Reachability*reach)
    {
        // Update the UI on the main thread
        dispatch_async(dispatch_get_main_queue(), ^{
            NSLog(@"Network OK");
            mLabel.text = @"Network OK";
            mLabel.accessibilityLabel = @"Network OK";
        });
    };
    
    // Internet is not reachable
    internetReachable.unreachableBlock = ^(Reachability*reach)
    {
        // Update the UI on the main thread
        dispatch_async(dispatch_get_main_queue(), ^{
            NSLog(@"No network");
            mLabel.text = @"No network";
        });
    };
    
    [internetReachable startNotifier];
}
@end
