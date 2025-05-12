# Dern-Support System Documentation

## Algorithm Design Documentation

### 1. Repair Scheduling Process

This section outlines the logic for customers scheduling a repair request, from login to confirmation.

**Steps in the Process:**
1. Customer logs into the system.
2. They submit a repair request, including device details and issues.
3. The system checks for available time slots.
4. If a time slot is available, the request is confirmed.
5. If no slots are available, the customer must choose a different date/time.
6. The system assigns a technician automatically or allows admin selection.
7. Confirmation is sent to both the customer and the technician.

#### Flowchart:
```plaintext
  +------------------------+
  |    Customer Logs In    |
  +------------------------+
            |
            v
  +------------------------+
  | Submit Repair Request  |
  +------------------------+
            |
            v
  +------------------------+
  | Check for Available    |
  |   Time Slots           |
  +------------------------+
            |
       +----+-----+
       |          |
       v          v
  +-------------+   +----------------------+
  | Slot Available? | No Slot Available     |
  +-------------+   +----------------------+
       |              |
       v              v
  +-------------------+   +---------------------+
  | Confirm Repair     |   | Ask Customer for     |
  | Slot Assignment    |   | New Date/Time        |
  +-------------------+   +---------------------+
            |
            v
  +-------------------------+
  | Assign Technician        |
  | (Auto or Admin)          |
  +-------------------------+
            |
            v
  +------------------------+
  | Send Confirmation to   |
  | Customer & Technician  |
  +------------------------+
