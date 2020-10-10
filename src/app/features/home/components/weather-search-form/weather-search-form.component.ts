import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "weather-search-form",
  templateUrl: "./weather-search-form.component.html",
  styleUrls: ["./weather-search-form.component.css"],
})
export class WeatherSearchFormComponent implements OnInit {
  public form: FormGroup;
  @Output() newWeatherData = new EventEmitter<number>();

  constructor(private fb: FormBuilder) {}

  public ngOnInit() {
    this.formValidation();
  }

  public formValidation() {
    this.form = this.fb.group({
      zipcode: ["", Validators.required],
    });
  }

  public sendDetail() {
    const payload = {
      zipcode: this.form.value.zipcode,
    };

    this.checkValidForm().invalid
      ? this.submitAll()
      : this.newWeatherData.emit(payload.zipcode);
  }

  private checkValidForm(): FormGroup {
    return this.form;
  }

  private submitAll(): void {
    Swal.fire({
      icon: "warning",
      title: "Something went wrong...",
      text: " Please complete the form",
    });
  }
}
