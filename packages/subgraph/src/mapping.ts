import { User, Payment, Shipment } from "../generated/schema";
import { UserAuthorized as UserAuthorizedEvent} from "../generated/Auth/Auth";
import { RoleAssigned as RoleAssignedEvent } from "../generated/RoleManagement/RoleManagement";
import { PaymentMade as PaymentMadeEvent } from "../generated/PaymentSystem/PaymentSystem";
import { ShipmentCreated as ShipmentCreatedEvent, StatusUpdated as StatusUpdatedEvent } from "../generated/ShipmentTracking/ShipmentTracking";

// Handler for UserAuthorized event
export function handleUserAuthorized(event: UserAuthorizedEvent): void {
  let user = new User(event.params.user.toHex());
  user.save();
}

// Handler for RoleAssigned event
export function handleRoleAssigned(event: RoleAssignedEvent): void {
  let user = User.load(event.params.user.toHex());
  if (user == null) {
    user = new User(event.params.user.toHex());
  }
  user.role = event.params.role;
  user.save();
}

// Handler for PaymentMade event
export function handlePaymentMade(event: PaymentMadeEvent): void {
    let payment = new Payment(event.transaction.hash.toHex());
    payment.sender = event.params.payer;
    payment.receiver = event.params.payee;
    payment.amount = event.params.amount;
    payment.timestamp = event.block.timestamp;
    payment.save();
  }

// Handler for ShipmentCreated event
export function handleShipmentCreated(event: ShipmentCreatedEvent): void {
  let shipment = new Shipment(event.params.id.toString());
  shipment.destination = event.params.destination;
  shipment.origin = event.params.origin;
  shipment.supplier = event.params.supplier;
  shipment.save();
}

// Handler for StatusUpdated event
export function handleShipmentUpdated(event: StatusUpdatedEvent): void {
  let shipment = Shipment.load(event.params.id.toString());
  if (shipment == null) {
    shipment = new Shipment(event.params.id.toString());
  }
  shipment.status = event.params.status;
  shipment.save();
}