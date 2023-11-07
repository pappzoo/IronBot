import { Component, OnInit } from '@angular/core';
import { RobotService } from '../robot.service';
import { RobotCategoryService } from '../robotcategory.service';
import { Robot } from '../robot.model';
import { RobotCategory } from '../robotcategory.model';

@Component({
  selector: 'app-root',
  templateUrl: './robotlista.component.html',
  styleUrls: ['./robotlista.component.css']
})
export class RobotlistaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  robots: Robot[] = [];
  robotCategories: RobotCategory[] = [];
  selectedCategoryId: number = -1;
  buttonText: string = "";

  constructor(
    private robotService: RobotService, 
    private robotCategoryService: RobotCategoryService) { }

  ngOnInit(): void {
    this.robotService.getButtonText().subscribe(buttonText => {
      console.log("OK ####################");
      this.buttonText = buttonText;
    });
    this.robotCategoryService.getRobotCategories().subscribe(robotCategories => {
      this.robotCategories = robotCategories;
    });
  }

  onCategorySelected(selectedCategoryId: number): void {
    this.selectedCategoryId = selectedCategoryId;

    if (selectedCategoryId !== -1) {
      this.robotService.getRobotsByCategoryId(selectedCategoryId).subscribe(robots => {
        this.robots = robots;
      });
    }
  }
}
