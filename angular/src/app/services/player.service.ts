import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../player.model';
import { concat } from 'rxjs/internal/observable/concat';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  // Retreive Player Data
  getPlayerData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/players");
  }

  // Add Player
  addPlayer(name: string, phone: number, dob: Date, position: string, email: string, wage: number, contract: Date): Observable<any> {
    const player: Player = {name: name, phone: phone, dob: dob, position: position, email: email, wage: wage, contract: contract};
    return this.http.post("http://localhost:8081/api/players", player);
  }

  // Delete Player
  deletePlayer(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/players/" + id);
  }

  // Get Player by ID
  getPlayer(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/players/" + id);
  }

  // Update Player 
  updatePlayer(id:String, name: string, phone: number, dob: Date, position: string, email: string, wage: number, contract: Date): Observable<any> {
    const player: Player = {name: name, phone: phone, dob: dob, position: position, email: email, wage: wage, contract: contract};
  return this.http.put("http://localhost:8081/api/players/" + id, player);
  }
}