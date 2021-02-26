import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'FileStatus' })
export class FileStatusPipe implements PipeTransform {
	transform(value: number) {

		let src: string = "";
		switch (value) {
			case 1:
				src = "Uploaded";
				break;
			case 2:
				src = "Sent";
				break;
			case 3:
				src = "Commented";
				break;
			case 4:
				src = "Comment Resolution";
				break;
			case 5:
				src = "Approved";
				break;
			default:
				src = "Uploaded";
				break;
		}
		return src;

	}
}
