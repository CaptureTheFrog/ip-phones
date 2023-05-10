/*
 *  Wildix Workforce IP phone keypad interface
 *  by Eddie Hart
 *
 *  01/04/2023
 */

#ifndef _KBD__EVENT_H
#define _KBD__EVENT_H
#include <linux/input.h>

/* Key Values */
#define KB_VALUE_KEYUP		0
#define KB_VALUE_KEYDOWN	1

/* Key Codes */
/* Telephone Keypad Keys */
#define KB_KEY_1			0x01
#define KB_KEY_2			0x02
#define KB_KEY_3			0x03
#define KB_KEY_4			0x04
#define KB_KEY_5			0x05
#define KB_KEY_6			0x06
#define KB_KEY_7			0x07
#define KB_KEY_8			0x08
#define KB_KEY_9			0x09
#define KB_KEY_0			0x0A
#define KB_KEY_STAR			0x0B
#define KB_KEY_POUND		0x0C

/* Navigation Keys */
#define KB_KEY_UP			0x0D
#define KB_KEY_DOWN			0x0E
#define KB_KEY_LEFT			0x0F
#define KB_KEY_RIGHT		0x10
#define KB_KEY_OK			0x11
#define KB_KEY_BACK			0x12

/* Call Keys */
#define KB_KEY_MUTE			0x13
#define KB_KEY_VOL_UP		0x14
#define KB_KEY_VOL_DOWN		0x15
#define KB_KEY_HEADSET		0x18
#define KB_KEY_REDIAL		0x19
#define KB_KEY_BOOK			0x1B
#define KB_KEY_SPEAKER		0x1C
#define KB_KEY_TRANSFER		0x1E
#define KB_KEY_VOICEMAIL	0x1F

/* Function Keys */
#define KB_KEY_FUNC_1		0x20
#define KB_KEY_FUNC_2		0x21
#define KB_KEY_FUNC_3		0x22
#define KB_KEY_FUNC_4		0x23

/* Line Keys */
#define KB_KEY_LINE_1		0x28
#define KB_KEY_LINE_2		0x29
#define KB_KEY_LINE_3		0x2A
#define KB_KEY_LINE_4		0x2B
#define KB_KEY_LINE_5		0x2C
#define KB_KEY_LINE_6		0x2D
#define KB_KEY_LINE_7		0x2E
#define KB_KEY_LINE_8		0x16

/* Hook Switch Key */
#define KB_KEY_HOOK			0x1D

#endif /* _KBD__EVENT_H */