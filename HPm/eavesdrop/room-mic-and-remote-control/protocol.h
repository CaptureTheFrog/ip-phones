/*
 *  IP Phone Remote Control Protocol
 *  by Eddie Hart
 *
 *  06/04/2023
 */

#ifndef _PROTOCOL_H
#define _PROTOCOL_H

#include <stdbool.h>

/* Key Values */
#define PROTOCOL_MODIFIER_UP			'u'
#define PROTOCOL_MODIFIER_DOWN			'd'

/* Key Codes */
/* Telephone Keypad Keys */
#define PROTOCOL_KEY_1					'1'
#define PROTOCOL_KEY_2					'2'
#define PROTOCOL_KEY_3					'3'
#define PROTOCOL_KEY_4					'4'
#define PROTOCOL_KEY_5					'5'
#define PROTOCOL_KEY_6					'6'
#define PROTOCOL_KEY_7					'7'
#define PROTOCOL_KEY_8					'8'
#define PROTOCOL_KEY_9					'9'
#define PROTOCOL_KEY_0					'0'
#define PROTOCOL_KEY_STAR				'*'
#define PROTOCOL_KEY_POUND				'#'

/* Navigation Keys */
#define PROTOCOL_KEY_UP					'^'
#define PROTOCOL_KEY_DOWN				'_'
#define PROTOCOL_KEY_LEFT				'<'
#define PROTOCOL_KEY_RIGHT				'>'
#define PROTOCOL_KEY_OK					'y'
#define PROTOCOL_KEY_BACK				'n'

/* Call Keys */
#define PROTOCOL_KEY_MUTE				'm'
#define PROTOCOL_KEY_VOL_UP				'+'
#define PROTOCOL_KEY_VOL_DOWN			'-'
#define PROTOCOL_KEY_HEADSET			'h'
#define PROTOCOL_KEY_REDIAL				'r'
#define PROTOCOL_KEY_BOOK				'b'
#define PROTOCOL_KEY_SPEAKER			's'
#define PROTOCOL_KEY_TRANSFER			't'
#define PROTOCOL_KEY_VOICEMAIL			'v'

/* Function Keys */
#define PROTOCOL_KEY_FUNC_1				'I'
#define PROTOCOL_KEY_FUNC_2				'J'
#define PROTOCOL_KEY_FUNC_3				'K'
#define PROTOCOL_KEY_FUNC_4				'L'

/* Line Keys */
#define PROTOCOL_KEY_LINE_1				'A'
#define PROTOCOL_KEY_LINE_2				'B'
#define PROTOCOL_KEY_LINE_3				'C'
#define PROTOCOL_KEY_LINE_4				'D'
#define PROTOCOL_KEY_LINE_5				'E'
#define PROTOCOL_KEY_LINE_6				'F'
#define PROTOCOL_KEY_LINE_7				'G'
#define PROTOCOL_KEY_LINE_8				'H'

/* Hook Switch Key */
#define PROTOCOL_KEY_HOOK				'P'

/* Commands */
#define PROTOCOL_COMMAND_WAIT			'w'
#define PROTOCOL_COMMAND_PASSTHRU_ON	'='
#define PROTOCOL_COMMAND_PASSTHRU_OFF	'|'
#define PROTOCOL_COMMAND_FREEZE_FB_ON   '['
#define PROTOCOL_COMMAND_FREEZE_FB_OFF  ']'

/* Syntax */
#define PROTOCOL_COMMAND_DELIMITER		';'

bool is_key(char c);
char protocol_key_to_event_key(char c);
char event_key_to_protocol_key(char c);

#endif /* _PROTOCOL_H */